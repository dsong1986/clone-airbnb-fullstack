// import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Header from './components/Layout/Header';
import Login from './components/Account/Login';
import Register from './components/Account/Register';


export default function App() {

  return (
  
    <>
       <Router>
        <Header />
        <Routes>
         
        <Route exact path='/login'    element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      
          {/* <Route path="/details/:id"    element={<Details />} />
      
          <Route exact path='/account'  element={<Account />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/create'   element={<Create />} /> */}
       
        </Routes>
        {/* <Footer /> */}
      </Router>
    
    </>
  )
}