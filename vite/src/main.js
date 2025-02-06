import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls";

const canvas = document.getElementById('canvas');

// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create and add a cube object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Add lighting
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


//6. Adding orbit control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// damping makes controls smoother
controls.DampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Animate the scene
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  
  box.rotation.y += 0.005;
  
  controls.update();
  
  renderer.render(scene, camera);
}

animate();