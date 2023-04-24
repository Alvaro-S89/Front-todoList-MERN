import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {RiLogoutBoxLine} from "react-icons/ri"

const Logout = () => {
  const { logout } = useAuth0()
  return (
    <div>
        <RiLogoutBoxLine className= 'text-mainOrange text-3xl fixed right-2 top-2' onClick={() =>logout({logoutParams:{returnTo:window.location.origin}})} />
    </div>
  )
}

export default Logout