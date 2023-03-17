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
import Index from './components/Pages/Index';
import Account from './components/Account/Account'
import HostAPlace from './components/Host/HostAPlace';

import axios from 'axios';
import { UserContextProvider } from './components/Account/UserContext';
import HostPage from './components/Host/HostPage';
axios.defaults.baseURL='http://localhost:3005'
axios.defaults.withCredentials = true

export default function App() {
  return (
    <>
      <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/account' element={<Account />} />
            <Route exact path='/account/:subpage?' element={<Account />} />
            <Route exact path='/hosting' element={<HostPage />} />
            <Route exact path='/become-a-host/:placeId' element={<HostAPlace />} />
          </Route>
        </Routes>
      </Router>
      </UserContextProvider>
    </>
  )
}