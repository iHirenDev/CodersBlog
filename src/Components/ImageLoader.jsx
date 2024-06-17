import React, {useState, useEffect} from 'react'
import logo from '../assets/cblogo.png'

function ImageLoader({
    src, 
    alt, 
    className = ''
    }) {

  const [imageLoaded, setImageLoaded] = useState(false)

  // useEffect(() => {
  //   const t = setTimeout(() => {
  //     setImageLoaded(true)
  //   }, 4000);
  
  //   return () => {
  //     clearTimeout(t)
  //   }
  // }, [])
  

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageLoadingError = () => {
    setImageLoaded(true)
  }

  return (
    <div className={`w-full ${className}`}>

      {!imageLoaded
       && (
        <img
          className={`object-cover w-full ${className}`}
          src={logo}
          alt='placeholder'
        />
        //<MyContentLoader/>
      )}
      <img
        className={`object-cover w-full ${className}`}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageLoadingError}
      />
    </div>
  )
}

export default ImageLoader