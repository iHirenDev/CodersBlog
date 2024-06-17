import React from 'react'
import blogService from '../appWrite/blogService'
import { Link } from 'react-router-dom'
import { ImageLoader } from './index'
import { useSelector } from 'react-redux'



function Postcard({$id, title, featuredImage, author, post_date}) {

   const darkMode = useSelector((state) => state.themeMode.darkMode)

   const userLetter = () => {
      return author.charAt(0)
   }


   return <Link to={`post/${$id}`}>
            <div className={`${darkMode ? 'bg-dark': 'bg-gray-300'} shadow-lg  rounded-xl p-4`}>
               <div className='flex flex-row justify-between items-center mb-2'>
                  <div className='flex items-center gap-4'>
                     {/* <img
                        className='w-16 h-16 rounded-full object-center object-cover border border-gray-400'
                        src='https://ec.europa.eu/info/funding-tenders/opportunities/portal/assets/img/user-icon.png'
                     /> */}
                     <h1 className={`${darkMode ? 'text-white' : 'text-black'} flex flex-col items-center justify-center w-16 h-16 text-4xl font-bold rounded-full border border-gray-400`}>{userLetter()}</h1>
                     <div className='w-fit'>
                        <h3 className={`${darkMode? 'text-white' : 'text-black'} font-semibold`}>{author}</h3>
                        <h3 className={`${darkMode? 'text-white' : 'text-black'} font-light lg:hidden`}>{post_date}</h3>
                     </div>
                  </div>
                  <h3 className={`${darkMode? 'text-white' : 'text-black'} hidden lg:block font-light mr-2`}>{post_date}</h3>
               </div>
                <div className='w-full justify-center mb-4'>
                <ImageLoader src={blogService.getFilePreview(featuredImage)} 
                             alt={title} 
                             className='h-[150px] lg:h-[300px]'/>    
                </div>
             <h2 className={`${darkMode? 'text-white' : 'text-black'} font-bold text-xl`}>{title}</h2>
            </div>
         </Link>
    }

export default Postcard