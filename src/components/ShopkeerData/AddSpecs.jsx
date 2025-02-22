import React from 'react';
import { useFormik } from 'formik';
import { ProductSchema } from '../Validation/SignUpValidation';

export default function AddSpecs() {
  const ShopKeeperid = sessionStorage.getItem('ShopKeeperid');

  const formik = useFormik({
    initialValues: {
      Shopkeeperid: ShopKeeperid,
      title: '',
      description: '',
      category: '',
      size: '',
      fashion: '',
      price: '',
      modelNo: '',
      image: null,
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      console.log('Submitted Values:', values);
    },
  });

  return (
    <div className='bg-gray-200 mt-0'>
      <div className='flex flex-wrap justify-center items-center h-[1010px]'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
          <h2 className='text-xl font-semibold text-gray-800 text-center mb-4'>Add Specifications</h2>

          {[
            { name: 'title', type: 'text', place: 'Enter title' },
            { name: 'description', type: 'text', place: 'Enter description' },
            { name: 'category', label: 'Choose a Specs Category:', type: 'select', options: ['men', 'women', 'kids', 'old'] },
            { name: 'size', label: 'Choose a Specs Size:', type: 'select', options: ['Wide', 'Narrow', 'Medium', 'ExtraWide'] },
            { name: 'fashion', label: 'Choose a Fashion Category:', type: 'select', options: ['Sport', 'Fashion', 'Classic', 'Old'] },
            { name: 'price', type: 'text', place: 'Enter price' },
            { name: 'modelNo', type: 'text', place: 'Enter model number' },
          ].map((field, index) => (
            <div key={index} className='flex flex-col'>
              {field.label && <label className='text-sm font-medium text-gray-600'>{field.label}</label>}
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formik.values[field.name] || ''}
                  onChange={formik.handleChange}
                  className='border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                >
                  <option value="">Select {field.name}</option>
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.place}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field.name] || ''}
                  className='border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && (
                <span className="text-red-500 text-sm">{formik.errors[field.name]}</span>
              )}
            </div>
          ))}

          {/* File Upload */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-600'>Upload Product Image</label>
            <input
              type="file"
              name="image"
              onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
              className='border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
            {formik.touched.image && formik.errors.image && (
              <span className="text-red-500 text-sm">{formik.errors.image}</span>
            )}
          </div>

          <button type='submit' className='bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
