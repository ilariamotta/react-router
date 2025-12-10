import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layout/DefaultLayout'
import ProdottoSingolo from './pages/ProdottoSingolo'
import { Navigate } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotti/:id" element={<ProdottoSingolo/>} />
            <Route path="*" element={<Navigate to="/prodotti" />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
