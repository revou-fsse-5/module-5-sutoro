import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Next.js's useRouter for navigation
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importing Formik components for form handling
import * as Yup from 'yup'; // Importing Yup for form validation

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter(); // Next.js useRouter for navigation

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Function to handle form submission
  const handleSubmit = async (values: User) => {
    try {
      // Replace this with your actual login logic (API call or form handling)
      const user = values.email === 'test@example.com' && values.password === 'password123';

      if (user) {
        console.log('User found:', values);
        router.push('/'); // Redirect to the homepage after successful "login"
      } else {
        setErrorMessage('Invalid email or password.');
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again.');
      setShowErrorMessage(true); // Displaying the error modal
    }
  };

  // Function to close the error modal
  const handleCloseErrorModal = () => {
    setShowErrorMessage(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg lg:w-1/3">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-5">Login</h3>

        {/* Formik form setup */}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }: { isSubmitting: boolean }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                {/* Displaying email validation error */}
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  required
                />
                {/* Displaying password validation error */}
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting} // Disabling the button while submitting
                >
                  Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Error Modal */}
        {showErrorMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-700 mb-4">Login Error</h2>
              <p className="text-gray-500">{errorMessage}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCloseErrorModal} // Close the modal on click
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
