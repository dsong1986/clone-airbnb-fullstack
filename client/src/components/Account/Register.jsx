import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
      
        try {
            const response = await axios.post('/register', {
                name,
                email,
                password,
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className="mt-4 grow flex items-top justify-center py-10">
                <div className='w-1/2'>
                    <h1 className="text-4xl text-center">Register</h1>

                    <div className='px-20 mt-5'>
                        <form onSubmit={registerUser} className='space-y-2 max-w-md mx-auto'>

                            <input type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={ev => setName(ev.target.value)} />
                            <input type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={ev => setEmail(ev.target.value)} />
                            <input type="password"
                                placeholder="password"
                                value={password}
                                onChange={ev => setPassword(ev.target.value)} />
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
