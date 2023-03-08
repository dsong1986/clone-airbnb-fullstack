import { useContext, useState } from 'react'
import { UserContext } from './UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Account() {
  const [redirect, setRedirect] = useState(null)
  const { ready, user, setUser } = useContext(UserContext)

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = 'profile'
  }

  async function logout() {
    await axios.post('/logout')
    setUser(null);
    setRedirect('/');
  }


  if (!ready) {
    return 'loading...'
  }
  if (redirect) {
    return <Navigate to={redirect} />
  }
  if (ready && !user) {
    return <Navigate to={'/login'} />
  }

  function linkClasses(type = null) {
    let classes = 'py-2 px-6 rounded-full ';
    if (type === subpage) {
      classes += 'bg-red-400 text-white '
    }

    return classes
  }


  return (
    <div>
      <nav className='w-full flex justify-center mt-8 gap-16 '>
        <Link to={'/account'} className={linkClasses('profile')} >My profile</Link>
        <Link to={'/account/bookings'} className={linkClasses('bookings')}>My bookings</Link>
        <Link to={'/account/places'} className={linkClasses('places')}>My accommodations</Link>
      </nav>
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto mt-10'>
          <p>Logged in as {user.username} {user.email} </p>
          <button className='primary max-w-sm mt-2' onClick={logout}>Logout</button>
        </div>
      )
      }
    </div>
  )
}
