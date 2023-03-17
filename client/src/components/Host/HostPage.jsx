import React, { useContext } from 'react'
import { UserContext } from '../Account/UserContext'
import { Navigate } from 'react-router-dom'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { BsHouse } from 'react-icons/bs'
import { TfiAngleRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { redirect } from 'next/dist/server/api-utils'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function HostPage() {
    const { user, ready } = useContext(UserContext)
    // console.log(user)
    let listId
   
    if (!ready) {
        return 'Loading...'
    }
    if (user === null && ready) {
        alert('please sign in first')
        return <Navigate to={'/login'} />
    }

    let navigate = useNavigate();

    async function routeChange (ev) {
        ev.preventDefault();
      
        try {
            const userId = user._id
            const {data} = await axios.post('/postNewListing', {
                user,
            });
      
            listId=data
            let path = '/become-a-host/:'
            path += listId
            navigate(path)
        } catch (error) {
            alert('fail to create a new list')
        }

     
    }
    return (
        <div className='mt-5 '>
            <div className='mx-20 pb-10'>
                <div className='mx-60' >
                    <div>
                        <div className='title '>Welcome back, {user.username}</div>
                    </div>
                    <div className='mt-10'>
                        <div><h1>Finish your listing</h1></div>
                        <div className='mt-4 w-full flex items-center  border-gray-200 border-2 rounded-lg h-24 px-4 cursor-pointer hover:border-black hover:bg-gray-50'>
                            <div className='flex items-center w-full'>
                                <div className='w-[60px] h-[50px] bg-gray-200 rounded-md flex items-center justify-center '>
                                    <BsFillHouseDoorFill size={20} />
                                </div>
                                <div className='ml-10 w-full'>
                                    <h2>Your House listing</h2>
                                </div>
                            </div>

                        </div>
                        <div className='mt-4 w-full flex items-center  border-gray-200 border-2 rounded-lg h-24 px-4  cursor-pointer hover:border-black hover:bg-gray-50' >
                            <div className='flex items-center w-full'>
                                <div className='w-[60px] h-[50px] bg-gray-200 rounded-md flex items-center justify-center '>
                                    <BsFillHouseDoorFill size={20} />
                                </div>
                                <div className='ml-10 w-full'>
                                    <h2>Your House listing</h2>
                                </div>
                            </div>

                        </div>
                        <div className='mt-4 w-full flex items-center  border-gray-200 border-2 rounded-lg h-24 px-4 cursor-pointer hover:border-black hover:bg-gray-50'>
                            <div className='flex items-center w-full'>
                                <div className='w-[60px] h-[50px] bg-gray-200 rounded-md flex items-center justify-center '>
                                    <BsFillHouseDoorFill size={20} />
                                </div>
                                <div className='ml-10 w-full'>
                                    <h2>Your House listing</h2>
                                </div>
                            </div>
                        </div>
                        <div className='h-10 pt-4 '>
                            <a href="" className='underline'>show all</a>
                        </div>
                    </div>


                    <div className='mt-10 mb-4 pb-18'>
                        <div className='mb-2'><h1>Start a new listing</h1></div>
                        <div className='flex items-center h-20 cursor-pointer'>
                            <div className='flex-none mr-4'><BsHouse size={30} /></div>
                            <button className='grow text-left' onClick={routeChange} ><h3 >Create a new listing</h3></button>
                            <div className='flex-none'><TfiAngleRight size={20} /></div>
                        </div>
                        <hr />
                        <div className='flex items-center h-20 cursor-pointer'>
                            <div className='flex-none  mr-2'><HiOutlineDuplicate size={40} /></div>
                            <h3 className='grow'>Duplicate an existing listing</h3>
                            <div className='flex-none '><TfiAngleRight size={20} /></div>
                        </div>
                        <hr />
                    </div>

                </div>
            </div>
        </div>
    )

}
