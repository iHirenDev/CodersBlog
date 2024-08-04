import React, { useCallback, useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, MyCustomSpinner, RTE, Select} from './index'
import blogService from '../appWrite/blogService'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {

    const [errorMessage, setErrorMessage] = useState('')
    const [myPost, setMyPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    const userData = useSelector((state) => state.auth.userData)
    const darkMode = useSelector((state) => state.themeMode.darkMode)
    const [showSpinner,setShowSpinner] = useState(false)
   

    const {register, handleSubmit, watch, setValue, control, getValues, reset} = useForm({
        defaultValues:{
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active'  
        }
    })

    const postDate = () => {
        const today = new Date()
        const yyyy = today.getFullYear()

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        let mm = monthNames[today.getMonth()]
        let dd = today.getDate()

        if(dd < 10) dd = '0' + dd

        const formattedDate = mm + ' ' + dd + ', ' + yyyy 
        return formattedDate
    }

  

    const submit = async(data) => {
        const isValid = data.title !== '' && data.slug !== '' && data.featuredImage !== '' && data.content !== '' && data.status !== ''

        if(isValid){
            setErrorMessage('')
            setShowSpinner(true)
            if(post){
                const file = data.image[0] ? await blogService.uploadFile(data.image[0]) : null
                if(file){
                    blogService.deleteFile(post.featuredImage)
                }
    
                const dbPost = await blogService.updateBlogPost(post.$id,{
                        ...data,
                        post_date:postDate(),
                        featuredImage: file ? file.$id : undefined
                })
    
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            } else {
               
                const file = await blogService.uploadFile(data.image[0])
                if(file){
                    const fileId = file.$id
                    data.featuredImage = fileId
                    const dbPost = await blogService.createBlogPost({
                        ...data,
                        post_date: postDate(),
                        author: userData.name,
                        userId: userData.$id
                    })
    
                    if(dbPost){
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        } else {
            setErrorMessage('Please complete all required fields.')
        }

        
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, "-")
        } else {
            return ''
        }
        
    }, [])

    useEffect( () => {
        //Async function call demo...
        /*
        async function fetchUser(){
            userData = await authService.getCurrentUser()
            console.log(`UserID:${userData.$id}`);
        }
        fetchUser()
        */

        // Pre filling the values...
        if(post){
            setValue('title', post.title)
            setValue('slug', post.$id)
            setValue('content', post.content)
            setValue('status', post.status)
        }
       

        blogService.getBlogPost(slug).then((post) => {
            if(post){
                setMyPost(post)
            } 
        })

        const subscription = watch((value, {name}) => {
            if(name === 'title'){
                setValue('slug', slugTransform(value.title), {shouldValidate: true})
            }
        })
     
      return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue, slug, post])
    

  return !showSpinner ? (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col lg:flex-row flex-wrap'>
        <div className='lg:w-2/3 px-2'>
            <Input
                label = 'Title: '
                placeholder = 'Title'
                className = 'mb-4'
                {...register('title')}
            />
            <Input
                label = 'slug: '
                placeholder = 'Slug'
                className = 'mb-4'
                {...register('slug')}
                onInput = {(e) => {
                    setValue('slug', slugTransform(e.target.value), {shouldValidate: true})
                }}
            />
            <RTE
                label='Content: '
                name='content'
                control={control}
                defaultValue={getValues('content')}
            />
        </div>
        <div className='lg:w-1/3 px-2 mt-4 lg:mt-0'>
            <Input
                label = 'Featured Image: '
                type = 'file'
                className = 'mb-4'
                accept = 'image/png, image/jpg, image/jpeg, image/gif'
                {...register('image')}
            />
            {myPost && (
                <div className='w-full mb-4'>
                    <img 
                        src={blogService.getFilePreview(myPost.featuredImage)} 
                        alt={myPost.title}
                        className='rounded-lg' />
                </div>
            )}
            <Select
                options = {['active', 'inactive']}
                label = 'Status'
                className = 'mb-4'
                {...register('status')}
            />
            <Button type='submit' bgColor={post ? 'bg-green-500' : undefined} className='w-full'>
            {post ? 'Update' : 'Submit'}
            </Button>

            <h2 className='text-red-500 font-semibold p-2'>{errorMessage}</h2>
        </div>

    </form>
  ) : (
    <MyCustomSpinner/>
  )
}

export default PostForm