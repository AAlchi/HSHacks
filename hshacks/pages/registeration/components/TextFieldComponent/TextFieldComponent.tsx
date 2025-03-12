import React, { useState } from 'react';
import { useEffect } from 'react';

interface TextFieldComponentInterface {
  name: string;
  placeHolder: string;
  type: string; 
  question: string;
  subtext?: string;
  value: any;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentInterface> = ({
  name,
  placeHolder,
  type, 
  question,
  subtext,
  value,
  required,
  onChange
}) => {  
  return (
    <div className='w-full'>
      <div className='mb-2'>
        <div className="text-black flex gap-1 font-bold text-md text-slate-600">
          {question} 
          {required && (
            <p title="This field is required" style={{color: "red"}}>
              *
            </p>
          )}
        </div> 
        {subtext && <p className='text-slate-500 text-sm'>{subtext}</p>}     
      </div>
      <div className="text-black mb-5">
        { 
            <div className="flex flex-col items-center">
              <input maxLength={70} required={required} name={name} value={value} placeholder={placeHolder} type={type} onChange={onChange} className="border-2 bg-slate-100 border-gray-400 w-full rounded pl-2 py-1"/>     
            </div> 
        }
      </div>
    </div>
  );
}

export default TextFieldComponent;
