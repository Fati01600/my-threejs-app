// We want access to the full library of THREE.js.
// That's why we import everything like this:
import * as THREE from 'three';

// Next, we create a new 3D scene.
// The scene is like the "world" where we put all our 3D objects —
// it’s basically the container for everything we want to render.
const scene = new THREE.Scene();

// Now we're setting up the camera that will view the scene.
// In this case, we’re using a PerspectiveCamera.
// This camera simulates how the human eye sees — things that are farther away look smaller.

// Syntax: PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(
  75, // Field of view: how wide the view is (like zoom level).
      // 75 is pretty standard. Try changing it to 100 (wider) or 50 (more zoomed in).

  window.innerWidth / window.innerHeight, // Aspect ratio.
// This is important to keep the scene from looking stretched. 
// We use the window size so it fills the screen nicely.

  0.1, // Near clipping plane. Things closer than this won’t be visible.
  1000 // Far clipping plane. Anything further away than this won’t be rendered.
);

// Now we set up the WebGL renderer — this turns our 3D scene into pixels on the screen.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Fullscreen canvas
document.body.appendChild(renderer.domElement); // Adds the canvas to the HTML body so we can see it

// Let’s create a cube 🎲
// First we define its shape (geometry), then its look (material), then combine them
const geometry = new THREE.BoxGeometry(); // Creates a cube (1x1x1 by default)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color
const cube = new THREE.Mesh(geometry, material); // Combine shape and material into a mesh (object)
scene.add(cube); // Add the cube to our scene

// Move the camera back a bit so we can actually see the cube (otherwise we’re inside it)
camera.position.z = 5;

// Animation loop — this function keeps running, 60 times a second (like a game loop)
function animate() {
  requestAnimationFrame(animate); // Tells the browser to call this function again before the next repaint

  // Each frame, we rotate the cube slightly
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Then we re-render the scene from the camera's perspective
  renderer.render(scene, camera);
}
animate(); // Start the animation loop
