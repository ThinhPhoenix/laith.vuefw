// use.js
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);
const command = args.join(" "); // Combine arguments into a single string

// Function Definitions
const pinia = () => {
  console.log("\x1b[38;5;208m%s\x1b[0m", "Running Pinia installation...");
  uninstallPinia();
  installPinia();
  createStoresDirectory();
  updateMainFile();
  createCounterStore();
  console.log("\x1b[33m%s\x1b[0m", "🍍 Pinia ");
  console.log("\x1b[34m%s\x1b[0m", "installation complete!");
};

function uninstallPinia() {
  try {
    execSync("npm uninstall pinia", { stdio: "inherit" });
  } catch (error) {
    console.error("Error uninstalling Pinia:", error);
  }
}

function installPinia() {
  try {
    execSync("npm i pinia", { stdio: "inherit" });
  } catch (error) {
    console.error("Error installing Pinia:", error);
  }
}

function createStoresDirectory() {
  const storesPath = path.join(process.cwd(), "src", "stores");
  try {
    if (!fs.existsSync(storesPath)) {
      fs.mkdirSync(storesPath, { recursive: true });
    }
  } catch (error) {
    console.error("Error creating stores directory:", error);
  }
}

function createCounterStore() {
  const counterStorePath = path.join(
    process.cwd(),
    "src",
    "stores",
    "counter.js"
  );
  const counterStoreContent = `
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
    },
});
`;

  try {
    fs.writeFileSync(counterStorePath, counterStoreContent, "utf8");
  } catch (error) {
    console.error("Error creating counter store:", error);
  }
}

function updateMainFile() {
  const mainFilePath = path.join(process.cwd(), "src", "main.js");
  const mainFileTsPath = path.join(process.cwd(), "src", "main.ts");
  const fileToUpdate = fs.existsSync(mainFileTsPath)
    ? mainFileTsPath
    : mainFilePath;

  if (!fs.existsSync(fileToUpdate)) {
    console.error("main.js or main.ts not found!");
    return;
  }

  try {
    const fileContent = fs.readFileSync(fileToUpdate, "utf8");
    if (fileContent.includes("import { createPinia } from 'pinia'")) return;

    const updatedImport = fileContent.replace(
      "// @pinia",
      `
import { createPinia } from 'pinia';
`
    );

    const updatedCode = fileContent.replace(
      "// #pinia",
      `
.use(createPinia())
`
    );

    fs.writeFileSync(fileToUpdate, updatedImport, "utf8");
    fs.writeFileSync(fileToUpdate, updatedCode, "utf8");
  } catch (error) {
    console.error("Error updating main.js:", error);
  }
}

switch (command) {
  case `pinia`:
    pinia();
    break;
  default:
    console.error("Unknown command. Please provide a valid command.");
    break;
}
