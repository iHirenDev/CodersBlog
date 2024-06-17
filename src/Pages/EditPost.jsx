import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../Components'
import blogService from '../appWrite/blogService'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost(props) {


    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = props.title
        if(slug){
            blogService.getBlogPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ): null
}

export default EditPost
