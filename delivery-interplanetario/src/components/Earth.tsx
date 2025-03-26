"use client"
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import img from "../earth.jpg"

export default function MarsSimulate( ) {
  const [address, setAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState<string[]>([]);
  const mountRef = useRef<HTMLDivElement | null>(null);
  // const markersRef = useRef<THREE.Group>(new THREE.Group());
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(400, 400);
    
    mountRef.current.appendChild(renderer.domElement);
    
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.IcosahedronGeometry(2,12)
    // cost url = "../mars.jpg";
    
    const material = new THREE.MeshPhongMaterial({  map: loader.load(img.src,), 
      // flatShading:true,
      color:0xfce0c6,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);
    // scene.add(markersRef.current);

    const light = new THREE.PointLight(0xffffff, 50);
    light.position.set(-2, 1, 5);
    scene.add(light);

    camera.position.z = 5;

    // const addRandomMarkers = () => {
      
      
    //    for (let i = 0; i < localStorage.length-1; i++) {
    //     // Obtém a chave pelo índice
    //     let key = localStorage.key(i);     
       
    //     if (key!=null)// Obtém o valor correspondente à chave
    //      { 
    //       let value = (localStorage.getItem(key)) as string;
    //       if (value!=null)
    //         {
    //         const lat = parseInt(value.substring(0, 2));
    //         const lon = parseInt(value.substring(2, 4));

    //         const phi = (lat / 99) * Math.PI - Math.PI / 2;
    //         const theta = (lon / 99) * 2 * Math.PI;
    //         const radius = 2.05;

    //         const x = radius * Math.sin(phi) * Math.cos(theta);
    //         const y = radius * Math.sin(phi) * Math.sin(theta);
    //         const z = radius * Math.cos(phi);
    //         // let numRandom= Math.round((Math.random()*(99-11)+11))

    //         const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    //         const color = new THREE.Color().setRGB( lat/100, lon/100, 0.8 );
    //         const markerMaterial = new THREE.MeshStandardMaterial({ color: 0xF26419 });
    //         const marker = new THREE.Mesh(markerGeometry, markerMaterial);
            
    //         marker.position.set(x, y, z);
    //         markersRef.current.add(marker,);
    //         }
    //       }
    //   }

    // };
    // addRandomMarkers();

    function animate() {
      
      requestAnimationFrame(animate);
      sphere.rotation.y -= 0.002;
      sphere.rotation.z += 0.001;
      // markersRef.current.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return <div ref={mountRef} className="w-[80vw]flex h-[50%] object-cover" />;
}