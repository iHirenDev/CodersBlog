import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {AuthLayout, Login} from './Components/index.js'
import Home, {fetchPosts} from './Pages/Home.jsx'
import SignUp from './Pages/SignUp.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'

const router = createBrowserRouter(

  /*
    Two ways to create routes...
  */

  // [{
  //   path: '/',
  //   element: <App/>,
  //   children:[
  //     {
  //       path:'/',
  //       element: <Home/>
  //     },
  //     {
  //       path: '/login',
  //       element: (
  //         <AuthLayout authentication={false}>
  //           <Login/>
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/signup',
  //       element: (
  //         <AuthLayout authentication={false}>
  //           <SignUp/>
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/all-posts',
  //       element: (
  //         <AuthLayout authentication>
  //           {''}
  //           <AllPosts/>
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/add-post',
  //       element: (
  //         <AuthLayout authentication>
  //           {''}
  //           <AddPost/>
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       loader: {postLoader},
  //       path: '/edit-post/:slug',
  //       element: (
  //         <AuthLayout>
  //           {''}
  //           <EditPost/>
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/post/:slug',
  //       element: <Post/>
  //     },
  //     {
  //       path: '/all-posts/post/:slug',
  //       element: <Post/>
  //     }
  //   ]
  // }]

    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='/' 
               loader={fetchPosts}
               element={<Home title='Coders Blog'/>}/>
        <Route path='/login' element={
                            <AuthLayout authentication={false}>
                              <Login title='Login'/>
                            </AuthLayout>}/>
        
        <Route path='/signup' element={
                            <AuthLayout authentication={false}>
                              <SignUp title='Sign Up'/>
                            </AuthLayout>}/>
        <Route path='/all-posts' element={
                            <AuthLayout authentication>
                              {''}
                              <AllPosts title='All Posts'/>
                            </AuthLayout>}/>
        <Route path='/add-post' element={
                            <AuthLayout authentication>
                              {''}
                              <AddPost title='Add Post'/>
                            </AuthLayout>}/>
        <Route path='/edit-post/:slug' element={
                            <AuthLayout authentication>
                              {''}
                              <EditPost title='Edit Post'/>
                            </AuthLayout>}/>
        <Route path='/post/:slug' element={<Post title='Post'/>}/>
        <Route path='/all-posts/post/:slug' element={<Post title='Post'/>}/>
      </Route>
    )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
