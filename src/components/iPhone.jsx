// import React from 'react'

import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import styled from "styled-components"
import Model from '../assets/3D-Model/Scene'

const Container = styled.div`
    
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    z-index: 1;
    background-color: transparent;
`

function IPhone() {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Define a threshold scroll height at which the model should disappear
    const scrollThreshold = 9000; // Adjust this value as needed

    // Update the visibility of the model based on the scroll position
    setIsVisible(scrollY < scrollThreshold);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container id="phone-model">
      {isVisible && (
        <Canvas camera={{ fov: 14 }}>
          <ambientLight />
          <directionalLight />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="sunset" />
          </Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      )}
    </Container>
  );
}

export default IPhone;