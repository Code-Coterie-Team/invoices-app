import React, { useEffect, useState , } from 'react'
// import Demo from './components/demo'
// import Invoices from './components/Invoices'
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Billform from './components/Billform';


const App = ()=> {
return(
  <Billform/>
)



  // const navigate = useNavigate();
  // useEffect(()=>
  //   navigate("/demo")
  //   ,[])

  // return (
  // <Routes>
  //   <Route path='/' element={<Invoices/>}></Route>
  //   <Route path='/demo' element={<Demo/>}></Route>
  // </Routes>
  // ) 
}

export default App 