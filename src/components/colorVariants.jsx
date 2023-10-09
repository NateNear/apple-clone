/* eslint-disable no-unused-vars */
// import React from 'react'
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { Suspense, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Model from '../assets/3D-Model/Scene2';
import Model2 from '../assets/3D-Model/Scene2';


const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
`;

function ColorVariants() {
  
  const Ref = useRef(null);
  const TextRef = useRef(null);
  const LeftRef = useRef(null);
  const RightRef = useRef(null);
  
  const { nodes, materials } = useGLTF('/scene.gltf');
  
  useLayoutEffect(() => {

    let RightElem = RightRef.current;
    let LeftElem = LeftRef.current;
    let TextElem = TextRef.current;

    let Elem = Ref.current;

    let updateColor = (color, text, rgbColor)=> {
      materials.Body.color.set(color);
      TextElem.innerText = text;
      LeftElem.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
      RightElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    }

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });
      

  }, []);

  return (
    <Section ref={Ref}>
      <Left ref={LeftRef}/>
      <Center ref={TextRef}/>
      <Right ref={RightRef}/>

      <Canvas camera={{fov:6.5}}>
            <ambientLight/>
            <directionalLight/>
            <Suspense fallback={null}>
                <Model2/>
            <Environment preset ="sunset"/>
            </Suspense>
                {/* <OrbitControls/> */}
        </Canvas>
    </Section>
  )
}

export default ColorVariants
