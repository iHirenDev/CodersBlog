import React from 'react'

function Button({
    isEditPost = false,
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    isEditPost ? 
    <button className={`px-4 rounded-lg py-2 ${bgColor} ${textColor} ${className}`}>{children}</button> :
    <button className={`px-4 rounded-lg h-10 relative flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-lg before:bg-indigo-600 before:duration-300 before:ease-out hover:shadow-indigo-600 hover:before:h-56 hover:before:w-full font-semibold ${bgColor} ${textColor} ${className}`} {...props}>
      <span className='relative z-10'>{children}</span>
      </button>
  )
}

export default Button