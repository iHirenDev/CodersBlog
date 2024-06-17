import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appWrite/authService'
import {login, logout} from './features/authSlice'
import {Outlet} from 'react-router-dom'
import { Header, Footer } from './Components'

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
  ) : null
}

export default App
