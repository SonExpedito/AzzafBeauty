import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Banner'
import Pt2 from './Components/Parte2'
import Parte3 from './Components/Parte3'
import Parte4 from './Components/Parte4'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Banner/>
      <Pt2/>
      <Parte3/>
      <Parte4/>
      <Footer/>
    </>
  )
}

export default App
