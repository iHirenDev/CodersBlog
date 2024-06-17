import React, {useEffect} from 'react'
import {SignUp as SignUpComponent} from '../Components'
import { useSelector } from 'react-redux'
function SignUp(props) {

  const darkMode = useSelector((state) => state.themeMode.darkMode)
  useEffect(()=> {
    document.title= props.title
},[])
  return (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light'} py-8`}><SignUpComponent/></div>
  )
}

export default SignUp