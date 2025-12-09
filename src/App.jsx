import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layout/DefaultLayout'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
