'use client';
import React, {useRef, useEffect} from 'react';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import {MTLLoader} from 'three/addons/loaders/MTLLoader.js';

// @ts-ignore
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';

const ThreeScene: React.FC = () => {
    // Create a reference to the element we want to attach the scene to
    const containerRef = useRef<HTMLDivElement>(null);
    // Create a reference to the <canvas> element
    const initialized = useRef(false)

    interface Settings {
        obj: string;
        pov: number;
        cameraZ: number;
        cameraX: number;
        cameraY: number;
        lightX: number;
        lightY: number;
        lightZ: number;
        lightColor: number;
        lightIntensity: number;
        lightDistance: number;
        objColor: number;

    }

    const settings: Settings = {
        obj: "Chair.obj",
        pov: 100,
        cameraZ: 100,
        cameraX: 0,
        cameraY: 0,
        lightX: 0,
        lightY: 0,
        lightZ: 0,
        lightColor: 0xFFFFFF,
        lightIntensity: 0.8,
        lightDistance: 0,
        objColor: 0x000000,
    };

    useEffect(() => {
        // Check if the component has been initialized (this is used to prevent the component from re-rendering)
        if (!initialized.current) {
            initialized.current = true
            // Check if the window is defined (necessary for server-side rendering)
            if (typeof window !== 'undefined' && containerRef.current) {
                // Create the scene
                const scene = new THREE.Scene();
                // Create the camera
                const camera = new THREE.PerspectiveCamera(settings.pov, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                containerRef.current.appendChild(renderer.domElement);
                camera.position.z = settings.cameraZ;

                // i want to save the chair as a variable
                let obj: any;

                const addLights = () => {
                    //Create a DirectionalLight and turn on shadows for the light
                    const keyLight = new THREE.DirectionalLight(settings.lightColor, settings.lightIntensity);
                    keyLight.position.set(-100, 0, 100);


                    const fillLight = new THREE.DirectionalLight(settings.lightColor, settings.lightIntensity);
                    fillLight.position.set(100, 0, 100);


                    const kickLight = new THREE.DirectionalLight(settings.lightColor, settings.lightIntensity);
                    kickLight.position.set(100, 0, -100).normalize();


                    scene.add(keyLight);
                    scene.add(fillLight);
                    scene.add(kickLight);

                }
                addLights();


                let dRight = true;
                const renderScene = () => {

                    //rotate the chair left and right between 2 and -2
                    if (obj) {
                        if (dRight && obj.rotation.y < 0) {
                            obj.rotation.y += 0.001;
                        } else if (!dRight && obj.rotation.y > -4) {
                            obj.rotation.y -= 0.001;
                        } else {
                            dRight = !dRight; // Reverse the direction
                        }
                        console.log(obj.rotation.y)
                    }

                    renderer.render(scene, camera);
                    requestAnimationFrame(renderScene);
                };

                const handleResize = () => {
                    const newWidth = window.innerWidth;
                    const newHeight = window.innerHeight;
                    // Update camera and renderer dimensions
                    camera.aspect = newWidth / newHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(newWidth, newHeight);
                };
                const loadOBJ = (): any => {
                    const mtlLoader = new MTLLoader();
                    // mtlLoader.setTexturePath('models/');
                    mtlLoader.setPath('models/');
                    // @ts-ignore
                    mtlLoader.load('Chair.mtl', (materials: any) => {
                        materials.preload()

                        const objLoader = new OBJLoader();
                        objLoader.setPath('models/')
                        objLoader.setMaterials(materials);
                        // @ts-ignore
                        objLoader.load(
                            // resource URL
                            settings.obj,
                            (                    // called when resource is loaded
                                object: any) => {
                                obj = object;

                                obj.scale.set(2, 2, 2);
                                obj.position.set(0, -100, 0);
                                scene.add(obj);
                            },
                            (                    // called when loading is in progresses
                                xhr: { loaded: number; total: number; }) => {
                                //consoles the loading progress
                                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                            },
                            // called when loading has errors
                            error => {
                                console.log('An error happened');
                            }
                        );
                    }, (xhr: { loaded: number; total: number; }) => {
                        console.log((xhr.loaded / xhr.total * 100) + '% Texture loaded');
                    }, error => {
                        console.log(error);
                    });
                }
                loadOBJ()

                //add listener for resize
                window.addEventListener('resize', handleResize);

                //add listener for click
                // containerRef.current.addEventListener('click', makeHuge);

                // Render the scene
                renderScene();

                // Clean up the event listener when the component is unmounted
                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        }
    }, []);
  return <div className="h-[200vh] w-screen" ref={containerRef} />;


};

export default ThreeScene;
