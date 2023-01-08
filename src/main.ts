import './style.css'

import * as THREE from 'three';

export { init };

let WINDOW_WIDTH = 800;
let WINDOW_HEIGHT = 800;

function init() {
    console.log('Application starting...');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, WINDOW_WIDTH / WINDOW_HEIGHT, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 'white' });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.HemisphereLight( 0xe0e0ff, 0x080820, 1 );
    scene.add( light );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    animate();
}
