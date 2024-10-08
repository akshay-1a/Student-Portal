"use client";
// components/Model.js
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { motion } from 'framer-motion';

function Model({ mouse, file }) {
  const { scene } = useGLTF(`/assets/${file}.glb`); // Your .glb file
  const modelRef = useRef(); // Reference to the model

  // Define rotation limits
  const MAX_ROTATION_X = Math.PI / 4; // 45 degrees
  const MAX_ROTATION_Y = Math.PI / 4; // 45 degrees

  // Set the default rotation
  const defaultRotation = {
    x: Math.PI / 40, // 22.5 degrees for default X rotation
    y: Math.PI / 8, // 22.5 degrees for default Y rotation
  };

  // Set initial rotation
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x = defaultRotation.x;
      modelRef.current.rotation.y = defaultRotation.y;
    }
  }, [modelRef]);

  // Rotate the model based on mouse position
  useFrame(() => {
    if (modelRef.current) {
      // Calculate center offset
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate mouse offset from center
      const mouseX = mouse.x - centerX;
      const mouseY = mouse.y - centerY;

      // Calculate new rotations
      const newRotationY = defaultRotation.y - mouseX * -0.001; // Adjust sensitivity
      const newRotationX = defaultRotation.x - mouseY * -0.001; // Adjust sensitivity

      // Clamp the rotations within the defined limits
      modelRef.current.rotation.y = Math.max(
        -MAX_ROTATION_Y,
        Math.min(newRotationY, MAX_ROTATION_Y)
      );
      modelRef.current.rotation.x = Math.max(
        -MAX_ROTATION_X,
        Math.min(newRotationX, MAX_ROTATION_X)
      );
    }
  });

  // Use useEffect to change the material color once the model is loaded
  useEffect(() => {
    // Traverse through all the meshes and update their materials
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // child.material.color = new THREE.Color("#f97316"); // Set material color to orange
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.4}
      position={[0, 0, 0]} // X, Y, Z coordinates
    />
  );
}

export default function ThreeDModel({ file, environmentPreset = "sunset" }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Track mouse position across the entire screen
  const handleMouseMove = (e) => {
    // Directly set the mouse X and Y
    setMouse({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Attach the mousemove event listener to the entire window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, type: "spring", ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
    >
      <Canvas className="absolute shad">
        <Suspense fallback={null}>
          <ambientLight intensity={10} color="#555" />
          <directionalLight position={[0, 1, 1]} intensity={1} />
          <Model mouse={mouse} file={file} />
          <Environment preset="studio" />
          {!isMobile && (
            <OrbitControls
              enableZoom={false}
            //   autoRotate={5}
            //   autoRotateSpeed={0.5}
            />
          )}
          {/* OrbitControls only rendered for non-mobile devices */}
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
