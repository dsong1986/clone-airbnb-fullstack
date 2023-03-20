import React from 'react'
import { SlCamera } from 'react-icons/sl'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { AiOutlineWifi } from 'react-icons/ai'
import { RiParkingBoxLine } from 'react-icons/ri'
import { SlScreenDesktop } from 'react-icons/sl'
import { FaSwimmingPool, FaSnowflake } from 'react-icons/fa'
import { TbToolsKitchen } from 'react-icons/tb'
import { MdOutlineMicrowave, MdOutlineBlender } from 'react-icons/md'
export default function Perks() {

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5'>

                <label className='perk'>
                    <input type="checkbox" className=' checked:text-white ' ></input>
                    <AiOutlineWifi />
                    <span>Wifi</span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <RiParkingBoxLine />
                    <span>Free Parking</span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <FaSwimmingPool />
                    <span>Swimming Pool </span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <SlScreenDesktop />
                    <span>TV</span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <TbToolsKitchen />
                    <span>Kitchen</span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <FaSnowflake />
                    <span>Air Conditioner</span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <MdOutlineMicrowave />
                    <span> Microwave </span>
                </label>

                <label className='perk'>
                    <input type="checkbox" />
                    <MdOutlineBlender />
                    <span> Blender </span>
                </label>

            </div>
        </>
    )

}
