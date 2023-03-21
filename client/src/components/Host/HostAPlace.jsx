import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { IoCloudUploadOutline } from 'react-icons/io5'
import Perks from './Perks';
import Time from './Time';
import axios from 'axios';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { v4 } from 'uuid'


export default function HostAPlace() {
  const { placeId } = useParams();
  // console.log(placeId);
  const imgFolder = 'http://localhost:3005/uploads/'

  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photoLink, setPhotoLink] = useState('')
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [maxGuests, setMaxGuests] = useState(0)

  async function addPhotoByLink(ev) {
    ev.preventDefault()
    if(photoLink.length>0){
    const { data: fileName } = await axios.post('/upload-by-link', { link: photoLink })

    setAddedPhotos(prev => {
      return [...prev, fileName]
    })}
    setPhotoLink('')
  }

 async function uploadPhoto(ev) {
    ev.preventDefault()
    const files = ev.target.files;
    let formData = new FormData()
    formData.append('myFile', files[0])
 
    const { data: fileName } =await  axios.post('/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    setAddedPhotos(prev => {
      return [...prev, fileName]
    })
  }

  return (
    <div className='lg:mx-60 px-20 mt-10 w-auto'>
      <form action="">

        <div className='mb-5'>
          <h1>Title:</h1>
          <input
            type="text"
            placeholder='title for your place'
            value={title}
            onChange={ev => setTitle(ev.arget.value)} />
        </div>

        <div className='mb-5'>
          <h1>Address:</h1>
          <input
            type="text"
            placeholder='address'
            value={address}
            onChange={ev => setAddress(ev.target.value)}
          />
        </div>

        <div className='mb-5'>
          <h1>Photos</h1>
          <div className='flex space-x-4'>
            <input
              type="text"
              placeholder='Add using a link'
              className='w-auto'
              value={photoLink}
              onChange={ev => setPhotoLink(ev.target.value)}
            />
            <button
              onClick={addPhotoByLink}
              className=' w-[120px] bg-gray-200 rounded-full text-sm font-semibold px-1  hover:border-2 border-black hover:bg-white'>
              Add photos
            </button>
          </div>
          <div className='grid mt-2 grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 '>
            {addedPhotos.length > 0 && addedPhotos.map(item => (

              <div key={v4()} className='items-center justify-center'>
                <img src={imgFolder + item} alt="" className='object-cover h-40 w-48 rounded-2xl' />
              </div>
            ))
            }
            <div>
              <label className='flex space-x-2 items-center justify-center  border bg-transparent rounded-2xl p-8 text-2xl font-poppin text-gray-600 h-40 w-48'>
                <input type="file" multiple className="hidden" onChange={uploadPhoto} />
                <div><IoCloudUploadOutline size={20} /></div>
                <h4>Upload</h4>
              </label>
            </div>
          </div>
        </div>
        {/* <div className='mb-5'>
          <h1 className='mb-2'>Add some photos of your house</h1>
          <p className='text-gray-500'>You'll need 5 photos to get started. You can add more or make changes later.
          </p>
          <div className='h-80  border-[1px] border-dashed border-gray-400 mt-10 flex items-center justify-center'>
            <div>
              <div className='flex justify-center '><SlCamera size={60} /></div>
              <h2 className='text-center'>Drag your photos here</h2>
              <p className='text-center text-sm font-light'>Choose at least 5 photos</p>
              <h4 className='text-center text-xs mt-5 underline'>Upload from your device</h4>
            </div>
          </div>
        </div> */}

        <div className='mb-5'>
          <h1>Description:</h1>
          <textarea
            cols="30"
            rows="5"
            className='border-[1px] rounded-lg w-full'
            value={description}
            onChange={ev => setDescription(ev.target.value)}
          >
          </textarea>
        </div>

        <div>
          <h1>Perks</h1>
          <h3>Select all the perks </h3>
          <Perks
            selected={perks}
            onChange={setPerks}
          />

        </div>
        <div className='mb-5'>
          <h1>Extra Info:</h1>
          <textarea
            cols="30"
            rows="4"
            className='border-[1px] rounded-lg w-full'
            value={extraInfo}
            onChange={ev => setExtraInfo(ev.target.value)}
          >
          </textarea>
        </div>

        <div className='mb-5'>
          <h1>Checkin & Checkout times</h1>
          <p>Add checkin & checkout times</p>
          <div className='grid grid-cols-3 gap-2'>
            <div>
              <h3>Check in time</h3>
              {/* <div class="checkin">
                  <Time />
              </div> */}
              <input
                type="text"
                placeholder='13:00'
                className='text-center'
                value={checkin}
                onChange={ev => setCheckin(ev.target.value)}
              />
            </div>
            <div>
              <h3>Check out time</h3>
              {/* <div class=" checkin"> */}
              {/* <Time /> */}
              {/* </div> */}
              <input
                type="text"
                placeholder='13:00'
                className='text-center'
                value={checkout}
                onChange={ev => setCheckout(ev.target.value)}
              />
            </div>
            <div>
              <h3>Maximum guests</h3>
              <input
                type="text"
                placeholder='2'
                className='text-center'
                value={maxGuests}
                onChange={ev => setMaxGuests(ev.target.value)}
              />
            </div>
          </div>
        </div>

        <button className='primary'>Submit</button>
      </form>
    </div>
  )

}
