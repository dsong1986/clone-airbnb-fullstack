import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <>
                <div className="mt-4  flex items-center justify-center py-10">
                    <div className='w-1/2'>
                        <h1 className="text-4xl text-center">Register</h1>

                        <div className='px-20 mt-5'>
                            <form action="" className='space-y-2'>

                                <input type="text" placeholder='Fullname' />
                                <input type="email" placeholder='you@email.com' />
                                <input type="password" placeholder='password' />
                                <button className='primary'>Register</button>
                                <div className="text-center py-2 text-gray-500">
                                    Already a member?<Link className="underline text-black" to={'/login'}>Login now</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
