import React, {useState} from 'react'
import {Input, Logo, Button, MyCustomSpinner} from './index'
import authService from '../appWrite/authService'
import { login as authLogin } from '../features/authSlice'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const {register, handleSubmit} = useForm()
  const [loading,setLoading] = useState(false)
  const darkMode = useSelector((state) => state.themeMode.darkMode)

  const signUp = async(data) => {
    setError('')
    setLoading(true)

    try {
      const userData = await authService.createAccount(data)
      if(userData){
        const userData = await authService.getCurrentUser()
        if(userData) dispatch(authLogin(userData))
        
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return !loading ? (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light'} flex items-center justify-center w-full`}>
      <div className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} mx-auto w-full max-w-lg  rounded-xl p-10 border border-black/10`}>
          <div className='mb-2 flex justify-center'>
                <span className={`inline-block w-full max-w-[100px]`}>
                    <Logo className='h-20 w-20 rounded-full'/>
                </span>
          </div>
          <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-center text-2xl font-bold leading-tight`}>Sign in to your account</h2>
          <p className={`${darkMode ? 'text-white' : 'text-black'} mt-2 text-center text-base text-black/60`}>
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form className='mt-8' onSubmit={handleSubmit(signUp)}>
              <div className='space-y-5'>
                <Input
                  label = 'Name: '
                  placeholder = 'Enter your full name'
                  {...register('name', {
                    required: true
                  })}
                />
                <Input
                  label = 'Email: '
                  placeholder = 'Enter your email address'
                  {...register('email',{
                    required: true,
                    validate: {
                      // Written between slashed and in the end .test(v)
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
                  })}
                />
                <Input
                  label = 'Password: '
                  placeholder = 'Please enter your password'
                  type = 'password'
                  {...register('password', {
                    required: true
                  })}
                />
                <Button type='submit' className='w-full h-30'> Sign Up</Button>
              </div>
            </form>
      </div>
    </div>
  ) : (
    <MyCustomSpinner message='Signing Up...'/>
  )
}

export default SignUp