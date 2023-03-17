import React, { Component } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <>
      <div className='py-4 flex flex-col min-h-screen mx-auto'>
        <Header />
        <hr />
        <Outlet />
      </div>
     
      </>
    )
  }
}
