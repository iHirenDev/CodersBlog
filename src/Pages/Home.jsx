import React, { useState, useEffect } from 'react'
import blogService from '../appWrite/blogService'
import { Container, PostCard } from '../Components'
import { login } from '../features/authSlice'
import { useSelector } from 'react-redux'
import { useLoaderData, Link } from 'react-router-dom'

function Home(props) {
    const posts = useLoaderData()
    //const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const darkMode = useSelector((state) => state.themeMode.darkMode)

    // useEffect(() => {
    //     blogService.getPosts().then((posts) => {
    //         if(posts){
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])
    
    useEffect(()=> {
        document.title= props.title
    },[])


    if(posts.length === 0){
        return(
            // <div className="w-full py-8 mt-4 text-center">
            //     <Container>
            //         <div className="flex flex-wrap">
            //             <div className="p-2 w-full">
            //                 <h1 className="text-2xl font-bold hover:text-gray-500">
            //                     Login to read posts
            //                 </h1>
            //             </div>
            //         </div>
            //     </Container>
            // </div>

            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Blogpost Website</h1>
                <p className="text-lg text-gray-300 mb-8">There are no posts has been made yet.</p>
                <Link to="/signup"
                      className='bg-blue-500 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                        Get Started
                </Link>
            </div>
            </div>
        )
    }

    return(
        <div className={`${darkMode ? 'bg-dark2' : 'bg-light'} w-full py-8`}>
            <Container>
                <div className='flex flex-col items-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-10/12'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

export const fetchPosts = async () => {
   let blogPosts = [];
   await blogService.getPosts().then((posts) => {
        if(posts){
            blogPosts = posts.documents
        }
    })
    return blogPosts.reverse()    
}