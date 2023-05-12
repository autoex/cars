import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useCreateCar from '../../HOC/hooks/useCreateCar';
import InputWithError from '../input/inputWithError';
import './AddForm.css';

const inputsData = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Enter name',
    errMsg: 'Name is required',
  },
  {
    type: 'text',
    name: 'img',
    placeholder: 'Enter picture address',
    errMsg: 'Img address is required',
  },
  {
    type: 'number',
    name: 'price',
    placeholder: 'Enter price',
    errMsg: 'price is required',
  },
];
const AddForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  const createCar = useCreateCar(reset);
  const formSubmit = (data) => {
    createCar(data);
    setFormVisible(false);
  };

  return (
    <div>
      {formVisible ? (
        <div
          className='addForm'
          ref={formRef}>
          <form onSubmit={handleSubmit(formSubmit)}>
            {inputsData.map((input) => (
              <InputWithError
                key={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                errMsg={input.errMsg}
                errors={errors}
                register={register}
              />
            ))}

            <button className='btn'>Add</button>
          </form>
        </div>
      ) : (
        <button
          className='btn'
          onClick={() => setFormVisible(true)}>
          Add
        </button>
      )}
    </div>
  );
};

export default AddForm;
