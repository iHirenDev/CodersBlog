import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {MdOutlineDarkMode} from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { toggleMode } from '../../features/themeSlice'


function ThemeToggler() {

  const dispatch = useDispatch()

  const darkMode = useSelector((state) => state.themeMode.darkMode)

  const toggleModeHandler = () => {
    dispatch(toggleMode())
  }

  return (
    <div className='mr-2 mt-1 pt-1 pl-1 pr-1 rounded-lg border border-white'>
      <button onClick={toggleModeHandler}>
        {darkMode ? 
            (<MdOutlineLightMode size={'25px'} color='white'/>) : 
            (<MdOutlineDarkMode size={'25px'} color='white'/>)}
      </button>
    </div>
  )
}

export default ThemeToggler