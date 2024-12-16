import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Components/NftCard"
import NftCard from './Components/NftCard'
import imgu from '/images/image-equilibrium.jpg'
function App() {

  return (
    <>
     <NftCard imgurl={imgu}/>
    </>
  )
}

export default App
