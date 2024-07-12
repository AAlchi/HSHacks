import React from 'react'

interface ButtonInterface {
    name: string;
    navigate: string;
    disabled?: boolean;
    color: string;
    icon: string
}

const Button: React.FC<ButtonInterface> = ({
    name,
    navigate, 
    disabled,
    color,
    icon
}) => {
  const relocate = () => {
    if (!disabled) {
      window.location.href = navigate
    }
  }
  return (
    <button onClick={relocate} className={`buttonStyle flex gap-2 rounded-lg px-5 py-3 font-bold whitespace-nowrap ${color} ${disabled && "opacity-75 cursor-not-allowed"}`}> 
        {name}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> 
              <path strokeLinecap="round" strokeLinejoin="round" d={icon} /> 
          </svg>  
    </button>
  )
}

export default Button