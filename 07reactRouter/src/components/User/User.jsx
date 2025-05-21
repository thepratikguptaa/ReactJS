import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams() // useParams se hum URL se parameters lete hai. yaha par userId hai, jo URL se milta hai.
  return (
    <div className='text-2xl text-black text-center m-5'>User: {userId} </div>
  )
}

export default User