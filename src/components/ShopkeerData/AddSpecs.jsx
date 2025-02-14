import React from 'react';
import { useFormik } from 'formik';

export default function AddSpecs() {

  const ShopKeeperid = sessionStorage.getItem('ShopKeeperid')

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {Shopkeeperid:ShopKeeperid},

  });
console.log(values)

  return (
    <div className='bg-gray-200'>
      <div className='flex flex-wrap justify-center items-center h-[1010px]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
          <h2 className='text-xl font-semibold text-gray-800 text-center mb-4'>Add Specifications</h2>
          {[
            { name: 'title', type: 'text', place: 'Enter title' },
            { name: 'description', type: 'text', place: 'Enter description' },
            { name: 'cateogry', label: 'Choose a Specs Category:', type: 'select', options: ['men', 'women', 'kids', 'old'] },
            { name: 'size', label: 'Choose a Specs Size:', type: 'select', options: ['Wide', 'Narrow', 'Medium', 'ExtraWide'] },
            { name: 'fashion', label: 'Choose a Fashion Category:', type: 'select', options: ['Sport', 'Fashion', 'Classic', 'Old'] },
            { name: 'Price', type: 'text', place: 'Enter price' },
            { name: 'modelNo', type: 'text', place: 'Enter model number' },
            { name: 'image', type: 'file' },
          ].map((field, index) => (
          <div key={index} className='flex flex-col'>
            {field.label && <label className='text-sm font-medium text-gray-600'>{field.label}</label>}
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={values[field.name] || ''}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              >
                {field.options.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.place}
                onChange={handleChange}
                onBlur={handleBlur}
                className='border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            )}
          </div>
          ))}
          <button type='submit' className='bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
