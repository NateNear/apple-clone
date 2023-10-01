import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Battery() {
  const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--white);
  `;

  const Text = styled.h1`
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    z-index: 1;
    white-space: nowrap;
    overflow: hidden;
  `;

  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top-=500 top",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
    });

    tl.to(textElement, { fontSize: "10rem", scale: 0.5, opacity: 40, duration: 10 });


  }, []);

  return (
    <Section>
      <Text ref={textRef}>
        Go all day with a single charge.
      </Text>
    </Section>
  );
}

export default Battery;
