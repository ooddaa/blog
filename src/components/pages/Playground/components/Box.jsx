import { useEffect } from "react";
import * as THREE from "three";
import { log } from "../../../../toolbox/index";
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
function Box() {
  const scene = new THREE.Scene();

  /* Camera */
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  /* Renderer */
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  // renderer.setSize(window.innerWidth, window.innerHeight);

  useEffect(() => {
    /* add canvas */
    const node = document.getElementsByClassName("Box")[0];
    node.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x000 });

    /* Cube */
    const material = new THREE.MeshBasicMaterial({ color: 0xfa592d });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    /* Line */
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    // scene.add(line);
    // renderer.render(scene, camera);

    // log(cube);
    /* render to canvas */
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      camera.position.z = 5;
      renderer.render(scene, camera);
    }

    animate();
    // log(node);
  }, []);

  return <div className="Box"></div>;
}

export default Box;
