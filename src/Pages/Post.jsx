import React,{useState, useEffect} from 'react'
import blogService from '../appWrite/blogService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, ImageLoader, MyCustomModal, MyCustomSpinner } from '../Components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

function Post(props) {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = post && userData ? post.userId === userData.$id : false

    const darkMode = useSelector((state) => state.themeMode.darkMode)

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        blogService.getBlogPost(slug).then((post) => {
            if(post){
                setPost(post)
                document.title= `${slug}`
                setLoading(false)
            } else {
                navigate('/')
            }
        })
    }, [slug, navigate])
    
    const userLetter = () => {
        return post.author.charAt(0)
     }

    const handleOpen = () => {
        setOpen(true)        
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleConfirm = () => {
        deletePost()
        handleClose()
    }

    // const handleDelete = () => {
    //     if(window.confirm(`Are you sure want to delete this post?`)){
    //         deletePost()
    //     }
    // }

    const deletePost = () => {
        blogService.deleteBlogPost(post.$id).then((status) => {
            if(status){
                blogService.deleteFile(post.featuredImage)
                navigate('/')
            }
        })
    }

  return !loading ? 
            post ? (
    <div className={`${darkMode ? 'bg-dark2' : 'bg-light'} flex flex-col items-center py-8`}>
        
        <div className='w-2/3'>
            <div className={`${darkMode ? 'bg-gradient-to-br from-blue-900 to-indigo-900' : 'bg-gradient-to-br from-blue-400 to-indigo-500'} rounded-lg p-8 mb-4`}>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-xl lg:text-4xl font-bold p-2`}>{post.title}</h1>
            <div className='flex items-center gap-4 mb-3 mt-3'>
                     {/* <img
                        className='w-16 h-16 rounded-full object-center object-cover border border-gray-400'
                        src='https://ec.europa.eu/info/funding-tenders/opportunities/portal/assets/img/user-icon.png'
                     /> */}
                     <h1 className={`${darkMode ? 'text-white' : 'text-black'} flex flex-col items-center justify-center w-8 h-8 lg:w-16 lg:h-16 text-xl lg:text-4xl font-bold rounded-full border border-white`}>{userLetter()}</h1>

                     <div className='w-fit'>
                        <h3 className={`${darkMode? 'text-white' : 'text-black'} font-semibold`}>{post.author}</h3>
                        <h3 className={`${darkMode? 'text-white' : 'text-black'} font-light`}>{post.post_date}</h3>
                     </div>
                     
                  </div>

                  </div>
            
            {isAuthor && (
                <div className='pb-8'>
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button isEditPost={true} bgColor='bg-green-500' className='mr-3 font-semibold'>
                                Edit Post
                            </Button>
                        </Link>
                        <button className='bg-red-600 px-4 rounded-lg py-2 font-semibold text-white float-end' onClick={handleOpen}>Delete Post</button>
                        <MyCustomModal open={open} handleClose={handleClose} handleConfirm={handleConfirm}/>
                        </div>  
                )}
            
            <div className={`w-full flex justify-center mb-4 relative`}>
                {/* <img
                    src={blogService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl"
                /> */}
                
                <ImageLoader
                    src={blogService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className='h-[200px] lg:h-[400px]'
                />
                
            </div>
            <div className={`p-2`}>
            <div className='w-full mb-6'>
                {/* <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-2xl font-bold`}>{post.title}</h1> */}
            </div>
            <div className={`${darkMode ? 'text-white' : 'text-black'} browser-css text-justify`}>
                {parse(post.content)}
            </div>
            </div>
        </div>
    </div>
            ) : <div><h1>Error loading post.</h1></div> 
            : <div></div>
}

export default Post