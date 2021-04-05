import React, { FC } from 'react';

export type InputTypes = {
    placeholder: string;
    size: string;
};

export const Input: FC<InputTypes> = ({ placeholder = 'Some text', size }) => {
    return (
        <div>
            <input className={`pl-3 py-2 border rounded ${size}`} placeholder={`${placeholder}`}/>
        </div>
    
    );
};
  
export default Input;