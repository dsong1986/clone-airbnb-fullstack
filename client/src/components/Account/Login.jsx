import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <>
                <div className="mt-4  grow flex items-top justify-center py-10">
                    <div className='w-1/2'>
                        <h1 className="text-4xl text-center">Login</h1>

                        <div className='px-20 mt-5'>
                            <form action="" className='space-y-2'>
                                <input type="email" placeholder='you@email.com' />
                                <input type="text" placeholder='Adding Custom Styles' />
                                <button className='primary'>Login</button>                           
                                <div className="text-center py-2 text-gray-500">
                                    Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
