import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appWrite/authService'
import {login, logout} from './features/authSlice'
import {Outlet} from 'react-router-dom'
import { Header, Footer, MyContentLoader, MyCustomSpinner } from './Components'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
        //dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  return !loading ? (
    //
    <div className='flex flex-col h-screen justify-between'>
    <Header/>
    <main className='mb-auto'>
    <Outlet/>
    </main>
    <Footer/>
    </div>
  ) : (
    // <div className='flex flex-col items-center pt-16'>
    //   <MyContentLoader className='w-10/12'/>
    //   <div className='p-4'></div>
    //   <MyContentLoader className='w-10/12'/>
    //   <div className='p-4'></div>
    //   <MyContentLoader className='w-10/12'/>
    //   <div className='p-4'></div>
    //   <MyContentLoader className='w-10/12'/>
    // </div>
    <MyCustomSpinner message='Fetching posts...'/>
  )
  
}

export default App
