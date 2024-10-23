import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Dynamically import all view components from the views directory
const routeModules = import.meta.glob("@/views/*.vue");

// Define routes array with proper typing
const routes: Array<RouteRecordRaw> = Object.keys(routeModules).map((path) => {
  // Extract the name from the file path
  const name = path.match(/\/views\/(.*)\.vue$/)?.[1] || '';

  // Match all parameters enclosed in brackets [id]
  const paramMatches = [...name.matchAll(/\[(.*?)\]/g)];
  const paramNames = paramMatches.map(match => match[1]); // Get the names without brackets

  // Extract the suffix and replace dots with slashes
  const suffix = name.replace(/\[.*?\]/g, '') // Remove parameters (including [id])
                     .replace(/\./g, '/') // Replace dots with slashes
                     .toLowerCase() // Convert to lowercase
                     .trim(); // Trim whitespace

  // Construct the route path
  const routePath = `${suffix}${paramNames.length ? '/' : ''}${paramNames.map(param => `:${param}`).join('/')}`;

  // Ensure that the route path starts with a single slash
  const formattedPath = `/${routePath.replace(/^\//, '')}`; // Remove any leading slashes from the routePath before adding one

  // Adjust name based on rules
  let adjustedName;
  if (name === "Page") {
    adjustedName = "Page";
  } else if (name.includes('.')) {
    // Extract the last segment after the last dot
    adjustedName = name.split('.').pop() || ''; // Get the last part
  } else if (paramNames.length > 0) {
    adjustedName = name.replace(/\[.*?\]/g, '').trim(); // Remove parameters and trim
  } else {
    adjustedName = name; // Default case
  }

  return {
    path: formattedPath,
    name: adjustedName, // Clean the name for the route
    component: routeModules[path], // Lazy load the component
  } as RouteRecordRaw; // Cast to RouteRecordRaw
});

// Optionally add a default route
routes.push(
  {
    path: "/",
    name: "Root",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/:catchAll(.*)", // Catch-all route for 404 pages
    name: "NotFound",
    component: () => import("@/views/404.vue"),
  }
);

// Log generated routes for debugging
console.log("Generated Routes:", routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
