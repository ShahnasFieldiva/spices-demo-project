import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Chemical from './pages/Chemical'
import Batch from './pages/Batch'

function App() {


  return (
    <div >
  <Navbar />
   <Routes>
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/batch" element={<Batch />} />
        <Route path="*" element={<Chemical />} /> {/* Default route */}
      </Routes>
    </div>
  )
}

export default App
