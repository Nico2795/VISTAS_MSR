import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, MainView } from "./pages";


const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/Login" element={<LoginPage/>} />
        <Route path = "/Register" element={<RegisterPage/>} />
        <Route path = "/MainView" element={<MainView/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App;