import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from '../features/authSlice'
import {Button, Input, Logo} from './index'
import authService from '../appWrite/authService'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const darkMode = useSelector((state) => state.themeMode.darkMode)


    const login = async(data) => {
        setError('')

        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                }
                navigate('/')
            }
            
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light'} flex items-center justify-center w-full`}>
        <div className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo className='h-20 w-20 rounded-full'/>
                </span>
            </div>
            <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-center text-2xl font-bold leading-tight`}>Sign in to your account</h2>
            <p className={`${darkMode ? 'text-white' : 'text-black'} mt-2 text-center text-base text-black/60`}>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
          
            <form className='mt-8' onSubmit={handleSubmit(login)}>
                <div className='space-y-5'>
                    <Input
                        label = 'Email: '
                        placeholder = 'Enter your Email'
                        type = 'email'

                        // register 'name' required and properties 
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
                        placeholder = 'Enter your passowrd'
                        type = 'password'
                        {...register('password',{
                            required: true
                        })}
                    />
                    <Button type='submit' className='w-full'>Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login