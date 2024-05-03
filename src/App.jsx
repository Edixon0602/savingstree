import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Tree from './components/Tree.jsx'


function App() {
  return (
    <div className='App'>
      <main>
        the app
      </main>
      <aside>
        <Tree></Tree>
      </aside>
    </div>
  )
}

export default App
