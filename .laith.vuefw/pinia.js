import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Function to uninstall Pinia silently, with error reporting
function uninstallPinia() {
  try {
    execSync('npm uninstall pinia', { stdio: 'ignore' });
  } catch (error) {
    console.error('Error uninstalling Pinia:', error);
  }
}

// Function to install Pinia silently, with error reporting
function installPinia() {
  try {
    execSync('npm install pinia', { stdio: 'ignore' });
  } catch (error) {
    console.error('Error installing Pinia:', error);
  }
}

// Function to create 'stores' directory silently, with error reporting
function createStoresDirectory() {
  const storesDir = path.join(process.cwd(), 'src', 'stores');
  try {
    if (!fs.existsSync(storesDir)) {
      fs.mkdirSync(storesDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating stores directory:', error);
  }
}

// Function to update main.js or main.ts silently and replace specific comments
function updateMainFile() {
  const mainFilePathJs = path.join(process.cwd(), 'src', 'main.js');
  const mainFilePathTs = path.join(process.cwd(), 'src', 'main.ts');
  const mainFilePath = fs.existsSync(mainFilePathTs) ? mainFilePathTs : mainFilePathJs;

  if (!fs.existsSync(mainFilePath)) {
    console.error('main.js or main.ts not found!');
    return;
  }

  try {
    const content = fs.readFileSync(mainFilePath, 'utf8');

    // Check if Pinia is already set up based on the comments
    if (content.includes('import { createPinia } from \'pinia\'')) {
      return;
    }

    // Replace the comment blocks with the necessary Pinia code
    const updatedContent = content
      .replace(
        '/*import-laith.vuefw-pinia*/',
        `import { createPinia } from 'pinia';`
      )
      .replace(
        '/*laith.vuefw-pinia*/',
        `.use(createPinia())`
      );

    fs.writeFileSync(mainFilePath, updatedContent, 'utf8');
  } catch (error) {
    console.error('Error updating main.js:', error);
  }
}

// Function to show a loading animation
function loadingAnimation() {
  const messages = ['laith.vuefw installing', 'laith.vuefw installing.', 'laith.vuefw installing..', 'laith.vuefw installing...'];
  let i = 0;

  const interval = setInterval(() => {
    process.stdout.write(`\r\x1b[33m${messages[i]} \x1b[0m`); // Orange color
    i = (i + 1) % messages.length;
  }, 500);

  return interval;
}

// Run the setup process silently
uninstallPinia();  // Uninstall Pinia first
installPinia();    // Then install Pinia

// Start loading animation
const animationInterval = loadingAnimation();

// Wait for a specified duration to show loading animation
setTimeout(() => {
  // Stop loading animation
  clearInterval(animationInterval);
  
  createStoresDirectory();
  updateMainFile();

  // Log a success message in blue
  console.log('\x1b[34m%s\x1b[0m', 'Hello Pinia!'); // Blue-colored message
}, 3000); // Change this value if you want a longer or shorter loading time