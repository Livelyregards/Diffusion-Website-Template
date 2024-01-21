// main.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';



function initBackground() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(105, window.innerWidth / window.innerHeight, 0.01, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.zIndex = '-1';
  document.body.insertBefore(renderer.domElement, document.body.firstChild);

  const particleCount = 50000;
  const particlesGeometry = new THREE.BufferGeometry();
  const posArray = new Float32Array(particleCount * 9);

  for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 3;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // This is the variable that controls the particle, comment out if undesired

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.003,
    color: 0xE5BEE4,
    transparent: true,
    opacity: 0.5
  });

  const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleMesh);

  camera.position.z = -1;
 

  let lastScrollTop = 0;
  let scrollSpeed = 0;

  function animateBackground() {
    requestAnimationFrame(animateBackground);

    // Calculate scroll speed
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollSpeed = scrollTop - lastScrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    // Adjust rotation based on scroll speed
    const rotationFactor = 0.001 + Math.abs(scrollSpeed) * 0.0003;
    particleMesh.rotation.x += 0.5*rotationFactor;
    particleMesh.rotation.y += 0.5*rotationFactor;

    renderer.render(scene, camera);
  }

  animateBackground();

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}




function initModel(objPath, containerId) {
  const scene = new THREE.Scene();
  // Set background color if needed, otherwise it will be transparent
  scene.background = new THREE.Color(0x808080);

  const container = document.getElementById(containerId);

  const camera = new THREE.PerspectiveCamera(105, container.clientWidth / container.clientHeight, 0.3, 100);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

    // Add lights
  const directionalLight = new THREE.DirectionalLight(0xE5BEE4, 0.5);
  directionalLight.position.set(0, 1, 0); // Adjust the position as needed
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xE5BEE4, 0.5);
  scene.add(ambientLight);

    // Load the OBJ model
  const loader = new OBJLoader();
  loader.load(
    objPath,
    (object) => {
      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
      console.log('An error happened');
    }
  );

  camera.position.set(3.5, 3.5, -0.6); // For example, set 5 units back on the Z axis
  camera.lookAt(scene.position); // Look at the origin

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

// Initialize the first model
initModel('/models/meme.obj', 'model-container-1');

// Initialize the second model
initModel('/models/meme.obj', 'model-container-1');

initModel('/models/meme.obj', 'model-container-3');

initModel('/models/meme.obj', 'model-container-3');

initBackground();








