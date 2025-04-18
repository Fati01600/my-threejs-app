# My First Three.js App 

This is my very first project using [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/)! It's a simple scene with a spinning green cube. A perfect starting point for learning 3D on the web. There is notes all over the code, so it is easier to understand. 

## Tech Stack
- [Three.js](https://threejs.org/) — for rendering 3D graphics
- [Vite](https://vitejs.dev/) — fast dev server and bundler
- Vanilla JavaScript (ES6 Modules)

## To start a vs in the terminal (gitbash - windows):
## Setup From Scratch (via Git Bash on Windows)

# 1. Create a new project folder and go inside it
mkdir my-threejs-app (u can call it anything you like;)
cd my-threejs-app

# 2. Initialize npm
npm init -y

# 3. Install Vite and Three.js
npm install --save-dev vite
npm install three

# 4. Create files and folders
mkdir src
echo > index.html
echo > src/main.js

# 5. Open VS Code (if set up in PATH)
code .

## In vs updata package.json; 
"scripts": {
  "dev": "vite"
}

## copy pase this beginner html and change it to your project name:
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>My First Three.js Scene>/title</title>
    </head>
    <body>
        <script type="module" src="/src/main.js"></script>
    </body>
</html>

## To run the project locally:
npm run dev

## How to Run It Locally
1. Clone my repo down:
   git clone <my-repo-url>
   cd my-threejs-app

## This is just the beginning, more 3D experiments coming up soon!
