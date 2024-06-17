import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {/* if 'label' */}
        {label && <label htmlFor={id}></label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`rounded-lg ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
// We can wrap Component like this in forwardRef too
export default React.forwardRef(Select)