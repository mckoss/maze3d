import './style.css'

import * as THREE from 'three';
import { Pane } from 'tweakpane';

import { buildMaze, coordFromIndex } from './maze-scaffold.js';

export { init };

const EPSILON = 0.01;

let divApp: HTMLDivElement;

// Tweak Pane Options
const tweakParams = {
    color: 0xafadd5,
    rows: 5,
    columns: 5,
    depth: 3,
    spacing: 1.8,
    z: 10,
    y: 6,
    spin: false,
};

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const maze = new THREE.Group();
const objects: THREE.Object3D[] = [];

let edges: [number, number][] | undefined;

function init() {
    divApp = document.getElementById('app') as HTMLDivElement;

    console.log('Application starting...');

    scene.background = new THREE.Color('lightgray');

    const canvas = renderer.domElement;
    divApp.appendChild(canvas);
    renderer.setSize(canvas.offsetWidth, canvas.offsetWidth);

    const light = new THREE.HemisphereLight(0xffffff, 0x202020, 1);
    scene.add(light);
    scene.add(maze);

    replaceGeomery();
    camera.position.y = tweakParams.y;
    camera.position.z = tweakParams.z;
    camera.lookAt(0, 0, 0);

    initPane();

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

        if (tweakParams.spin) {
            maze.rotation.y -= 0.01;
        }
    }

    animate();
}

function addObject(obj: THREE.Object3D) {
    maze.add(obj);
    objects.push(obj);
}

function replaceGeomery() {
    // Remove old geometry
    for (let obj of objects) {
        maze.remove(obj);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: tweakParams.color, opacity: 0.9, transparent: true });
    const startMaterial = new THREE.MeshStandardMaterial({ color: 'red' });
    const endMaterial = new THREE.MeshStandardMaterial({ color: 'green' });

    let index = 0;
    let lastIndex = (tweakParams.rows * tweakParams.columns * tweakParams.depth) - 1;
    for (let r = 0; r < tweakParams.rows; r++) {
        for (let c = 0; c < tweakParams.columns; c++) {
            for (let d = 0; d < tweakParams.depth; d++) {
                let m = index === 0 ? startMaterial : (index === lastIndex) ? endMaterial : material;
                const cube = new THREE.Mesh(geometry, m);
                [ cube.position.x, cube.position.y, cube.position.z ] = posFromIndex(c, r, d);

                addObject(cube);
                index++;
            }
        }
    }

    if (edges === undefined) {
        let mazeGraph = buildMaze(tweakParams.rows, tweakParams.columns, tweakParams.depth);
        edges = [];
        let edge: [number, number] | undefined;
        while ((edge = mazeGraph.nextEdge()) !== undefined) {
            edges.push(edge);
        }
    }

    for (let edge of edges) {
        const [c, r, d] = coordFromIndex(edge[0], tweakParams.rows, tweakParams.columns);
        addObject(connectFrom(c, r, d, edge[1]));
    }
}

function connectFrom(c: number, r: number, d: number, dir: number): THREE.Mesh {
    const posStart = posFromIndex(c, r, d);
    const geometry = new THREE.CylinderGeometry(0.25, 0.25, tweakParams.spacing - 1 + 2 * EPSILON, 32);
    const material = new THREE.MeshStandardMaterial({ color: tweakParams.color, opacity: 0.9, transparent: true });
    const cylinder = new THREE.Mesh(geometry, material);
    [ cylinder.position.x, cylinder.position.y, cylinder.position.z ] = posStart;
    if (dir === 0) {
        cylinder.rotateZ(Math.PI / 2);
        cylinder.position.x += tweakParams.spacing / 2 + EPSILON;
    }
    if (dir === 1) {
        cylinder.position.y += tweakParams.spacing / 2 + EPSILON;
    }
    if (dir === 2) {
        cylinder.rotateX(Math.PI / 2);
        cylinder.position.z += tweakParams.spacing / 2 + EPSILON;
    }

    return cylinder;
}

function posFromIndex(column: number, row: number, depth: number): [number, number, number] {
    return [
        (column - (tweakParams.columns - 1) / 2) * tweakParams.spacing,
        (row - (tweakParams.rows - 1) / 2) * tweakParams.spacing,
        (depth - (tweakParams.depth - 1) / 2) * tweakParams.spacing
    ];
}

function initPane() {
    const paneElement = document.createElement('div');
    paneElement.className = 'tweak-pane';
    divApp.appendChild(paneElement);

    const pane = new Pane({
        title: '3D Maze Options',
        container: paneElement
    });

    pane.addInput(tweakParams, 'color', { view: 'color' });

    pane.addInput(tweakParams, 'y', { min: -10, max: 10, step: 0.1 }).on('change', (_ev) => {
        camera.position.y = tweakParams.y;
        camera.lookAt(0, 0, 0);
    });
    pane.addInput(tweakParams, 'z', { min: 2, max: 40, step: 0.1 }).on('change', (_ev) => {
        camera.position.z = tweakParams.z;
        camera.lookAt(0, 0, 0);
    });
    pane.addInput(tweakParams, 'rows', { min: 1, max: 10, step: 1 }).on('change', (_ev) => {
        edges = undefined;
    });
    pane.addInput(tweakParams, 'columns', { min: 1, max: 10, step: 1 }).on('change', (_ev) => {
        edges = undefined;
    });
    pane.addInput(tweakParams, 'depth', { min: 1, max: 10, step: 1 }).on('change', (_ev) => {
        edges = undefined;
    });
    pane.addInput(tweakParams, 'spacing', { min: 1.5, max: 5, step: 0.1 });
    pane.addInput(tweakParams, 'spin');

    pane.on('change', () => {
        replaceGeomery();
    });
}
