import React, {useState, useEffect} from 'react'
import blogService from '../appWrite/blogService'
import { PostCard, Container } from '../Components'
import { useSelector } from 'react-redux'

function AllPosts(props) {

    const [posts, setPosts] = useState([])

    const darkMode = useSelector((state) => state.themeMode.darkMode)
    
    useEffect(() => {
        document.title = props.title
        blogService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])
    

  return (
    <div className={`${darkMode ? 'bg-dark2' : 'bg-light'} w-full py-8`}>
        <Container>
        <div className='flex flex-col items-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-2/3'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
        </Container>
    </div>
  )
}

export default AllPosts