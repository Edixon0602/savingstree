import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(255, 87, 51)");
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 100, 2000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('st-scene-container').appendChild(renderer.domElement);

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      //'src/assets/models/simon_bolivar.glb',
      'src/assets/models/maple_tree.glb',
      // called when the resource is loaded
      function (gltf) {
        console.log(gltf);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(gltf.scene);

      },
      // called while loading is progressing
      function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

      },
      // called when loading has errors
      function (error) {

        console.log('An error happened');
        console.log(error);

      }
    );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);
    camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  })

  return (
    <>
      <h1>Savings Tree</h1>
      <div id='st-scene-container'></div>
    </>
  )
}

export default App
