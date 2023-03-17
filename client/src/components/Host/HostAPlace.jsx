import React from 'react'
import { useParams } from 'react-router-dom';

export default function HostAPlace () {
    const { placeId } = useParams();
    console.log(placeId);
    return (
      <div>
        I will fill in details about a host, the host place id is {placeId}
      </div>
    )
  
}
