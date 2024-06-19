import React, { useEffect } from 'react'
import { Login as LoginComponent } from '../Components'
import { useSelector } from 'react-redux'
function Login(props) {
  const darkMode = useSelector((state) => state.themeMode.darkMode)

  useEffect(()=> {
    document.title= props.title
},[])
  return (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light'} py-10`}><LoginComponent/></div>
  )
}

export default Login