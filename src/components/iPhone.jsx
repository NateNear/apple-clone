// import React from 'react'

import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
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

function iPhone() {
  return (
    <Container id="phone-model">
        <Canvas camera={{fov:14}}>
            <ambientLight intensity={1.25}/>
            <directionalLight intensity={0.4}/>
            <Suspense fallback={null}>
                <Model/>
            <Environment preset ="sunset"/>
            </Suspense>
                {/* <OrbitControls/> */}
        </Canvas>
    </Container>
  )
}

export default iPhone