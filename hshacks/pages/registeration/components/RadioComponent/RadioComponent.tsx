import React, { useState } from 'react';
import { useEffect } from 'react';

interface RadioComponentInterface {
  name: string;
  listOfNames: string[];
  question: string;
  subtext?: string;
  chosenElement: any;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioComponent: React.FC<RadioComponentInterface> = ({
  name,
  listOfNames,
  question,
  subtext,
  chosenElement,
  required,
  onChange
}) => {  
  return (
    <div className='w-full'>
      <div className='mb-3'>
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
      <div className="grid grid-cols-2 gap-4 gap-x-16  text-black mb-5">
        {
          listOfNames.map((option, index) => (
            <div key={index} className="flex items-center">
              <input required={required} value={option} checked={chosenElement == option} name={name} type='radio' onChange={onChange} className="mr-1"/>
              {option} 
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RadioComponent;