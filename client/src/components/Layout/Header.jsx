import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from '../../../public/images/logo.png'
import { BiSearch } from 'react-icons/bi'
// import { BsGlobe } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'


export default function Header() {
  // const {user} = useContext(UserContext);
  return (
    <>
      <header className=" sticky top-0   bg-white">
        <div className="mx-10 h-20 flex">

          {/* left logo  */}
          <div className=" hidden md:inline md:w-[50px] lg:w-1/3">
            <div className="img w-1/3 h-full items-center py-5 flex">
              <img src={logo} alt="logo" className='relative  w-full cursor-pointer hidden md:inline-flex' />
            </div>
          </div>


          {/* middle search  */}
          <div className="w-full min-w-[400px] md:w-[400px] py-4">
            <div className="search items-center px-5 ">
              <div className="searchArea flex rounded-full h-12 border border-gray-300  ">

                <span className="w-1/4  items-center flex pl-2">
                  <div className="px-2 text-sm">Anywhere
                  </div>
                </span>

                <span className=" items-center flex">
                  <div className="border-l h-5 border-gray-300"> </div>
                </span>

                <span className="w-1/4  items-center flex pl-2">
                  <div className="px-2 text-sm">Any week
                  </div>
                </span>

                <span className=" items-center flex">
                  <div className="border-l h-5 border-gray-300"> </div>
                </span>

                <span className="w-1/3  items-center flex pl-2">
                  <div className="px-2 text-sm text-gray-500">Add guest
                  </div>
                </span>

                <span className="items-center flex">
                  <BiSearch className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
                </span>
              </div>
            </div>
          </div>



          {/* right login  */}
          <div className="flex justify-end w-1/3 justify-end w-1/3  py-5  md:w-[500px]  hidden md:inline-flex ">

            <div className="flex items-center cursor-pointer w-1/3 ">

            </div>
            {/* Airbnb your home */}
            <div className="flex items-center cursor-pointer  min-w-[160px] px-5 rounded-full hover:bg-gray-100 ">
              <button className="text-sm font-semibold">Airbnb your home</button>
            </div>

            {/* Global */}
            <div className="flex items-center cursor-pointer ">
              <div className="flex h-full rounded-full  px-3 hover:bg-gray-100"  >
                <button className="w-full">
                  <RiGlobalLine className='text-xl cursor-pointer ' />
                </button>
              </div>
            </div>


            {/* Login */}
            <Link to='/login' className="flex  w-20 items-center ml-6 cursor-pointer  ">
              <div className="flex rounded-full border-2 p-2 h-full  space-x-2  hover:shadow-lg">
                <div className="items-center flex">
                  <AiOutlineMenu className='mr-1 cursor-pointer' />
                </div>
                <div className="items-center flex">
                  <FaUserCircle color="gray" fontSize='2em' className=' cursor-pointer' />
                </div>
              </div>
            </Link>

          </div>
        </div>
        <hr />
      </header>


    </>
  )
}