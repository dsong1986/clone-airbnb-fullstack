import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import {UserContext} from './UserContext.jsx'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUser} = useContext(UserContext)

    async function handleLogin(ev) {
        ev.preventDefault();

        try {
            const response = await axios.post('/login', {
                email,
                password,
            });
            // console.log(response)
            setUser(response.data)
            alert('Login successful')
            setRedirect(true)
        } catch (error) {
            alert('Login failed! please check your email and password')
        }
    }

    // if login, redirect

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <>
            <div className="mt-4  grow flex items-top justify-center py-10">
                <div className='w-1/2'>
                    <h1 className="text-4xl text-center">Login</h1>

                    <div className='px-20 mt-5'>
                        <form onSubmit={handleLogin} className='space-y-2'>
                            <input
                                type="email"
                                placeholder='you@email.com'
                                value={email}
                                onChange={ev => setEmail(ev.target.value)}
                            />
                            <input
                                type="text"
                                placeholder='password'
                                value={password}
                                onChange={ev => setPassword(ev.target.value)}
                            />
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
