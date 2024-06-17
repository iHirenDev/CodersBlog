import React from 'react'
import {logout} from '../../features/authSlice'
import authService from '../../appWrite/authService'
import {useDispatch} from 'react-redux'

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
            .then(()=>{
                dispatch(logout())
            })
            .catch((error)=>{
                console.log('Error logging out!!!');
            })
    }

  return (
    <button className='rounded-full font-semibold py-2 lg:text-white'
            onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn