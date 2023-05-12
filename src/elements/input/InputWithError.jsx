import React from 'react';
import { useForm } from 'react-hook-form';

const InputWithError = ({ type, name, placeholder, errMsg, errors, register }) => {
   
    
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register( name , { required:  errMsg  })}
      />
      {errors[name]?.message && <p style={{color:'red', fontSize:'10px'}}>{errors[name].message}</p>}
    </>
  );
};

export default InputWithError;
