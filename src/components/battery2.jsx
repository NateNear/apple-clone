import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
`;

const Battery = styled.ul`

    list-style: none;
    background-color: var(--white);
    border: 3px solid var(--dark);
    border-radius: 8px;
    padding: 0.5rem;
    width: 15rem;
    z-index: 1;

    li {
        width: 100%;
        height: 5rem;
        background-color: var(--dark);
        background-image: linear-gradient(-90deg, var(--gradient));
        opacity: 0;
  }

  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }
`;

function Battery2() {
    const battery = useRef(null);
    let elements = gsap.utils.selector(battery);
  
    useLayoutEffect(() => {
      let t1 = gsap.timeline({});
  
      elements("li").forEach((el) => {
        t1.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            // markers: true,
          },
          opacity: 1,
        })
    })
})

  return (
    <Section >
        <Battery ref={battery}>
          <li />
          <li />
          <li />
          <li />
          <li />
        </Battery>
    </Section>
  );
}

export default Battery2;
