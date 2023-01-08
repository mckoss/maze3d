import './style.css'

import * as THREE from 'three';

import { Pane } from 'tweakpane';

export { init };

let WINDOW_WIDTH = 800;
let WINDOW_HEIGHT = 800;

// Tweak Pane Options
const tweakParams = {
    color: 0xff0000,
};

function init() {
    console.log('Application starting...');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, WINDOW_WIDTH / WINDOW_HEIGHT, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: tweakParams.color });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.HemisphereLight(0xffffff, 0x202020, 1);
    scene.add( light );

    camera.position.z = 5;

    const paneElement = document.createElement('div');
    paneElement.className = 'tweak-pane';
    document.body.appendChild(paneElement);

    const pane = new Pane({
        title: '3D Maze Options',
        container: paneElement
    });

    pane.addInput(tweakParams, 'color', { view: 'color' }).on('change', (ev) => {
        material.color.set(tweakParams.color);
    });

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    animate();
}
