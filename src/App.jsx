import React, { createContext, useEffect, useState , } from 'react'
import Demo from './components/demo'
import Invoices from './components/Invoices'
import { Routes, Route, useNavigate } from "react-router-dom";
// import Sidebar from './components/Sidebar';
// import Billform from './components/Billform';
import { useSelector } from 'react-redux';


const App = ()=> {


   const navigate = useNavigate();
   useEffect(()=>
     navigate("/demo")
     )

return(

   <Routes>
    <Route path='/' element={<Invoices/>}></Route>
     <Route path='/demo' element={<Demo/>}></Route>
   </Routes>

  // <Billform/>
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