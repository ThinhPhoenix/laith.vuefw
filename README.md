## laith.vuefw: A Comprehensive Vue Project Starter 🚀

This project provides a versatile and efficient foundation for building modern Vue applications. It combines the power of the following technologies:

- <img src="https://skillicons.dev/icons?i=vue&theme=light" alt="Router" width="20" height="20"> **Vue.js**: A progressive JavaScript framework for crafting user interfaces.
- <img src="https://skillicons.dev/icons?i=vite&theme=light" alt="Router" width="20" height="20"> **Vite**: A fast development server and build tool tailored for Vue projects.
- <img src="https://skillicons.dev/icons?i=tailwind&theme=light" alt="Router" width="20" height="20"> **Tailwind CSS**: A utility-first CSS framework that allows for rapid and flexible styling.
- <img src="https://skillicons.dev/icons?i=nodejs&theme=light" alt="Router" width="20" height="20"> **Vue Router**: Facilitates smooth navigation and structured routing within your application.

### 🔑 Key Features

- **Organized Routing:**
  - **`Index.vue` & `404.vue`**: Centralized within the `/views` directory to maintain organizational clarity.
  - **Dynamic Routing**: Quickly define new routes by adding `PageName.vue` components to the `/views` folder.
  - **Sub-URL Navigation**: Effortlessly navigate between nested pages using hierarchical URLs, e.g., `Page.Page2.Page3.Page4...PageN.vue`.
  - **ID-Based Routing**: Create dynamic routes for displaying content or user profiles using identifiers like `Page[id][username]...[phone].vue`.

### 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone -b js --single-branch https://github.com/thinhphoenix/laith.vuefw.git <project-name>
   ```
   `For js version.`
    ```bash
   git clone -b ts --single-branch https://github.com/thinhphoenix/laith.vuefw.git <project-name>
   ```
   `For ts version.`

3. **Install dependencies:**
   ```bash
   cd <project-name>
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Access the application** at `http://localhost:5173/`.

### 📂 Project Structure

```
laith.vuefw/
├── index.html
├── src/
│   ├── main.js
│   ├── components/
│   │   ├── Monalisa.vue
│   │   └── Redirect.vue
│   ├── views/
│   │   ├── Index.vue
│   │   └── 404.vue
│   ├── App.vue
│   ├── router/
│   │   └── index.js
│   └── global.css
└── vite.config.js
```

### 🎨 Customization

- **Tailwind CSS**: Customize the appearance of your application with Tailwind’s utility classes. For more details, refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs/).
- **Vue Router**: Modify routing and navigation in the `src/router/index.js` file.
- **Modular Components**: Add new UI components by placing them in the `src/components` directory.
- <img src="https://skillicons.dev/icons?i=pinia&theme=light" alt="Router" width="20" height="20"> **Pinia**: Run terminal code `npm run use pinia` at root to automatically install and setup pinia.
- <img src="https://skillicons.dev/icons?i=tailwind&theme=light" alt="Router" width="20" height="20"> **TailwindCSS**: Run terminal code `npm run use tailwind` at root to automatically install and setup tailwind.

### 💡 Contributing

Contributions are highly encouraged! Whether it’s fixing bugs or adding new features, feel free to open issues or submit pull requests to help improve the project.
