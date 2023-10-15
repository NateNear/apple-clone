import { GlobalStyle } from "./styles/globalStyles"
import Quote from './components/quote'
import Hero from './components/hero'
import Iphone from "./components/iPhone"
import PhoneProps from "./components/phoneProps"
import Display from "./components/display"
import ProcessorSection from "./components/processor"
import Battery from "./components/battery"
import Battery2 from "./components/battery2"
import ColorVariant from "./components/colorVariants"
// import CameraSection from "./components/cameraVid"..

function App() {

  return (
    <>
      <GlobalStyle/>
      <Quote/>
      <Hero/>
      <Iphone/>
      <PhoneProps/>
      <Display/>
      <ProcessorSection/>
      <Battery/>
      <Battery2/>
      <ColorVariant/>
      {/* <CameraSection/> */}
    </>
  )
}

export default App
