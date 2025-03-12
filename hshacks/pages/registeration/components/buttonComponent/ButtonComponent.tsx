import React from 'react';

interface ButtonComponentProps {
  name: string;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  submit?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  name,
  secondary,
  onClick,
  disabled,
  submit
}) => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => { 
    if (!disabled) {
      if (onClick) {
        onClick(e);
      }
      window.scrollTo(0, 0);
    } else {
     e.preventDefault()
    }
  };
  

  return (
    <button onClick={handleSubmit} type={submit ? "submit" : "button"} className={`${secondary ? "bg-slate-500" : "bg-blue-500"} ${disabled && "opacity-50 cursor-block"} w-full text-white p-2 rounded-lg font-bold hover:opacity-50 transition px-4`}>
      {name}
    </button>
  );
};

export default ButtonComponent;
