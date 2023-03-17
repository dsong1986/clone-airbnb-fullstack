import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'

export default class PlacesPage extends Component {
  render() {
    return (
      <div>
        <div className='text-center pt-10'>
            <Link className='bg-primary text-white rounded-full px-4 py-2 inline-flex  items-center justify-center gap-2' to = {'/become-a-host/new'}>
                <AiOutlinePlus />
                
                
                
                Create a new listing
            </Link>
        </div>
      </div>
    )
  }
}
