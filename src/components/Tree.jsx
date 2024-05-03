import { useEffect, useState } from 'react'
import '../App.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export default function Tree() {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(12, 196, 196)");
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    const controls = new OrbitControls( camera, renderer.domElement );
    document.getElementById('st-scene-container').appendChild(renderer.domElement);

    

    // Instantiate a loader
    const loader = new GLTFLoader();

    loader.load(
      'src/assets/models/small-tree.glb',
      function (gltf) {
        scene.add(gltf.scene);
      },
      function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

      },
      // called when loading has errors
      function (error) {

        console.log('An error happened');
        console.log(error);

      }
    );

    camera.position.z = 5;
    controls.update();
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
    camera.position.set( 0, 20, 100 );
    
  })

  return (
    <>
      <div id='st-scene-container'></div>
    </>
  )
}
