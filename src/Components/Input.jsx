import React, {useId} from 'react'
import { useSelector } from 'react-redux'

const Input = React.forwardRef( function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref){
    const id = useId()

    const darkMode = useSelector((state) => state.themeMode.darkMode)
    return (
        
        <div className='w-full'>
            {label && 
            <label 
                className={`${darkMode ? 'text-white' : 'text-gray-600'}`}
                htmlFor={id}>
                {label}
            </label>
            }
            <input 
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id} />
        </div>
    )
})

export default Input