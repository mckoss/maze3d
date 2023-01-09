import './style.css'

import * as THREE from 'three';

import { Pane } from 'tweakpane';

export { init };

let WINDOW_WIDTH = 800;
let WINDOW_HEIGHT = 800;

// Tweak Pane Options
const tweakParams = {
    color: 0xafadd5,
    rows: 5,
    columns: 5,
    depth: 3,
    spacing: 1.8,
    z: 10,
};

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

const cubes: THREE.Mesh[] = [];

function init() {
    console.log('Application starting...');

    const camera = new THREE.PerspectiveCamera(75, WINDOW_WIDTH / WINDOW_HEIGHT, 0.1, 1000);

    scene.background = new THREE.Color('lightgray');

    renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
    document.body.appendChild(renderer.domElement);

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

    pane.addInput(tweakParams, 'color', { view: 'color' });

    camera.position.z = tweakParams.z;
    pane.addInput(tweakParams, 'z', { min: 2, max: 40, step: 0.1 }).on('change', (_ev) => {
        camera.position.z = tweakParams.z;
    });
    pane.addInput(tweakParams, 'rows', { min: 1, max: 10, step: 1 });
    pane.addInput(tweakParams, 'columns', { min: 1, max: 10, step: 1 });
    pane.addInput(tweakParams, 'depth', { min: 1, max: 10, step: 1 });
    pane.addInput(tweakParams, 'spacing', { min: 1.5, max: 5, step: 0.1 });

    addGeometry();
    pane.on('change', () => {
        addGeometry();
    });

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

        for (let cube of cubes) {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
    }

    animate();
}

function addGeometry() {
    // Remove old geometry
    for (let cube of cubes) {
        scene.remove(cube);
    }
    renderer.renderLists.dispose();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: tweakParams.color, opacity: 0.9, transparent: true });
    for (let r = 0; r < tweakParams.rows; r++) {
        for (let c = 0; c < tweakParams.columns; c++) {
            for (let d = 0; d < tweakParams.depth; d++) {
                const cube = new THREE.Mesh(geometry, material);
                cube.position.x = (c - (tweakParams.columns - 1)/ 2) * tweakParams.spacing;
                cube.position.y = (r - (tweakParams.rows - 1) / 2) * tweakParams.spacing;
                cube.position.z = (d - (tweakParams.depth - 1) / 2) * tweakParams.spacing;

                cubes.push(cube);
                scene.add(cube);
            }
        }
    }
}

