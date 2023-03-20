import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from '../../../public/images/logo.png'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'
import { UserContext } from "../Account/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className=" sticky top-0 mx-8  bg-white ">
        <div className="mx-10 h-20 flex">

          {/* left logo  */}
          <div className=" hidden md:inline md:w-[50px] lg:w-1/3">
            <div className="img w-1/3 h-full items-center py-5 flex">
              <img src={logo} alt="logo" className='relative  w-full cursor-pointer hidden md:inline-flex' />
            </div>
          </div>



          {/* right login  */}
          <div className="flex justify-end w-1/3 justify-end w-1/3  py-5  md:w-[500px]  hidden md:inline-flex ">

            <div className="flex items-center cursor-pointer w-1/3 ">

            </div>
            {/* Airbnb your home */}
            <div className="flex items-center cursor-pointer  min-w-[160px] px-5 rounded-full hover:bg-gray-100 ">
              <button className="text-sm font-semibold"><Link to={'/hosting'}>Airbnb your home</Link></button>
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
            <Link to={user ? '/account' : '/login' }className="flex  w-20 items-center ml-6 cursor-pointer  ">
              <div className="flex rounded-full border-2 p-2 h-full  space-x-2  hover:shadow-lg">
                <div className="items-center flex">
                  <AiOutlineMenu className='mr-1 cursor-pointer' />
                </div>
                {!user && (
                  <div className="items-center flex">
                  <FaUserCircle color="gray" fontSize='2em' className=' cursor-pointer' />
                </div>
                )

                }
                { user && (
                  <div className="items-center flex">
                    {user.username
                    }
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}