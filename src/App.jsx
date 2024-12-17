import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Components/NftCard"
import NftCard from './Components/NftCard'
import imgu from '/images/image-equilibrium.jpg'
import { BrowserRouter , Routes ,Route } from 'react-router'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='nft-preview-card-component/' element={<NftCard imgurl={imgu}/>}/>

        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
