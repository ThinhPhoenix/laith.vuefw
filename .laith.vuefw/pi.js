import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Function to install Pinia
function installPinia() {
  console.log('Installing Pinia...');
  execSync('npm i pinia', { stdio: 'inherit' });
  console.log('Pinia installed successfully.');
}

// Function to create 'stores' directory
function createStoresDirectory() {
  const storesDir = path.join(process.cwd(), 'src', 'stores');
  if (!fs.existsSync(storesDir)) {
    console.log('Creating stores directory...');
    fs.mkdirSync(storesDir, { recursive: true });
    console.log('Stores directory created.');
  } else {
    console.log('Stores directory already exists.');
  }
}

// Function to update main.js or main.ts
function updateMainFile() {
  const mainFilePathJs = path.join(process.cwd(), 'src', 'main.js');
  const mainFilePathTs = path.join(process.cwd(), 'src', 'main.ts');
  const mainFilePath = fs.existsSync(mainFilePathTs) ? mainFilePathTs : mainFilePathJs;

  if (!fs.existsSync(mainFilePath)) {
    console.error('main.js or main.ts not found!');
    return;
  }

  const content = fs.readFileSync(mainFilePath, 'utf8');

  // Check if Pinia is already set up
  if (content.includes('createPinia')) {
    console.log('Pinia is already set up.');
    return;
  }

  // Add import for createPinia and update the app initialization
  const importPinia = `import { createPinia } from 'pinia';\n`;
  const piniaSetup = `.use(createPinia())`;

  const updatedContent = content.replace(
    /(createApp\(App\)\s*\.use\(router\))/,
    `$1${piniaSetup}`
  );

  if (!content.includes('createPinia')) {
    const newContent = importPinia + updatedContent;
    fs.writeFileSync(mainFilePath, newContent, 'utf8');
    console.log('Pinia setup added to main.js.');
  }
}

// Run the setup process
installPinia();
createStoresDirectory();
updateMainFile();

console.log('Pinia setup completed.');