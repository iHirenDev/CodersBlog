import React, { useEffect } from 'react'
import { Container, PostForm } from '../Components'
import { useSelector } from 'react-redux'

function AddPost(props) {

  const darkMode = useSelector((state) => state.themeMode.darkMode)

  useEffect(()=> {
    document.title= props.title
},[])

  return (
    <div className={`${darkMode ? 'bg-dark2' : 'bg-light'} py-8`}>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost