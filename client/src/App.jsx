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
import Layout from './components/Layout/Layout';
import axios from 'axios';

axios.defaults.baseURL='http://localhost:3005'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}