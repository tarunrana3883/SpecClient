import * as Yup from 'yup';

export const UserSchema = Yup.object().shape({
  // Name validation
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Only alphabets and spaces are allowed') // Allows only alphabets and spaces
    .min(2, 'Name must be at least 2 characters') // Minimum length
    .max(50, 'Name cannot exceed 50 characters') // Maximum length
    .required('Name is required'), // Required field

  // Email validation
  userName: Yup.string()
    .email('Invalid email address') // Validates email format
    .required('Email is required'), // Required field

  // Mobile number validation
  mobileNo: Yup.string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/, // Allows optional country code and 10-digit number
      'Invalid mobile number. Please provide a 10-digit number.'
    )
    .min(10, 'Mobile number must be exactly 10 digits') // Ensures exactly 10 digits
    .max(10, 'Mobile number must be exactly 10 digits') // Ensures exactly 10 digits
    .required('Mobile number is required'), // Required field

  // Password validation
  password: Yup.string()
    .required('Password is required') // Required field
    .min(8, 'Password must be at least 8 characters'), // Minimum length

  // Confirm password validation
  confirmPassword: Yup.string()
    .required('Confirm Password is required') // Required field
    .oneOf([Yup.ref('password'), null], 'Passwords must match'), // Matches the password field

  // Profile image validation
  // profileImg: Yup.mixed()
  //   .required('Profile image is required') // Required field
  //   .test('fileType', 'Unsupported file format', (value) => {
  //     if (!value) return false; // If no file is uploaded
  //     const supportedFormats = ['image/jpeg', 'image/png', 'image/gif']; // Supported file types
  //     return supportedFormats.includes(value.type); // Validates file type
  //   })
  //   .test('fileSize', 'File size too large', (value) => {
  //     if (!value) return false; // If no file is uploaded
  //     return value.size <= 5 * 1024 * 1024; // Validates file size (5MB limit)
  //   }),
});