import React, { useContext }  from 'react'
import { UserContext } from './UserContext'
import { Navigate } from 'react-router-dom'

export default function Account () {
  const {user, ready} = useContext(UserContext)
  if(!ready) {
    return 'loading...'
  }

  if(ready && !user) {
    return <Navigator to = {'/login'} />
  }

  return (
      <div>
        This is account page for {user?.username}
      </div>
    )
}
