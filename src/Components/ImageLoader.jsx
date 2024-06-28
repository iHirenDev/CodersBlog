import React, {useState, useEffect} from 'react'
import logo from '../assets/cblogo.png'

function ImageLoader({
    src, 
    alt, 
    className = ''
    }) {

  const [imageLoaded, setImageLoaded] = useState(false)
      console.log(`Image URL:${src}`);
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
    <div className={`relative w-full overflow-hidden ${className}`}>

      {!imageLoaded
       && (
        <img
          className={`absolute inset-0 object-cover w-full h-full`}
          src={logo}
          alt='placeholder'
        />
        //<MyContentLoader/>
      )}
      <img
        className={`absolute inset-0 object-cover w-full h-full`}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageLoadingError}
      />
    </div>
  )
}

export default ImageLoader