import { GlobalStyle } from "./styles/globalStyles"
import Quote from './components/quote'
import Hero from './components/hero'
// import Iphone from "./components/iPhone"
import PhoneProps from "./components/phoneProps"
import Display from "./components/display"
import ProcessorSection from "./components/processor"

function App() {

  return (
    <>
      <GlobalStyle/>
      <Quote/>
      <Hero/>
      {/* <Iphone/> */}
      <PhoneProps/>
      <Display/>
      <ProcessorSection/>
    </>
  )
}

export default App
