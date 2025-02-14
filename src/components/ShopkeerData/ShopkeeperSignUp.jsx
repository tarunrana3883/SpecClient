import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaImage, FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';
import { UserSchema } from '../Validation/SignUpValidation';

export default function ShopkeeperSignUp({ setOtpVerify }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      userName: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      profileImg: null,
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert('Account created successfully!');
      }, 2000);
    },
  });

  const inputdata = [
    { icons: <FaUser />, name: 'name', label: 'Name', placeholder: 'Enter your name', type: 'text' },
    { icons: <FaEnvelope />, name: 'userName', label: 'Email', placeholder: 'Enter your email', type: 'email' },
    { icons: <FaPhone />, name: 'mobileNo', label: 'Mobile No', placeholder: 'Enter your Mobile No', type: 'text' },
    { icons: <FaLock />, name: 'password', label: 'Password', placeholder: 'Enter your Password', type: showPassword ? 'text' : 'password', toggleVisibility: togglePasswordVisibility, show: showPassword },
    { icons: <FaLock />, name: 'confirmPassword', label: 'Confirm Password', placeholder: 'Confirm your Password', type: showConfirmPassword ? 'text' : 'password', toggleVisibility: toggleConfirmPasswordVisibility, show: showConfirmPassword },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-700 p-5">
      <div className="w-full max-w-lg px-8 py-10 bg-white rounded-2xl shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Create your Seller Account
        </h2>

        <form onSubmit={handleSubmit}>
          {inputdata.map(({ icons, name, label, placeholder, type, toggleVisibility, show }, key) => (
            <div className="mb-5" key={key}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">{icons}</div>
                <input
                  name={name}
                  type={type}
                  value={values[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full text-gray-900 dark:text-white pl-10 pr-10 py-3 border-[1.5px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 dark:bg-gray-700 placeholder-gray-500 
                    ${
                      errors[name] && touched[name]
                        ? 'border-red-500 bg-red-50 dark:bg-red-900' // Error state
                        : 'border-gray-300 dark:border-gray-600' // Normal state
                    }`}
                  placeholder={placeholder}
                />
                {toggleVisibility && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" onClick={toggleVisibility}>
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </div>
                )}
                {errors[name] && touched[name] && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationCircle /> {errors[name]}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Upload Image */}
          <div className="mb-5">
            <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload Image
            </label>
            <div className="relative">
             
              <FaImage className="absolute left-3 top-1/2 bottom-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                name="profileImg"
                type="file"
                id="profileImg"
                onChange={(event) => {
                  setFieldValue('profileImg', event.currentTarget.files[0]);
                }}
                className="w-full pl-10 pr-4 py-3 border-[1.5px] border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 dark:bg-gray-700"
              />
             
              {errors.profileImg && touched.profileImg && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationCircle /> {errors.profileImg}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
