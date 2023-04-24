import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <img className='w-96 h-96 p-8' src="https://res.cloudinary.com/dfg3nr91y/image/upload/v1682344182/youtask-low-resolution-logo-color-on-transparent-background_binmyx.png" alt="YouTask" />

      <button className='bg-mainOrange text-3xl px-8 py-3 rounded-xl' onClick={() =>loginWithRedirect()}>Login</button>
    </div>
  )
}

export default Login