import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Replace with your actual API call (ensure proper validation and error handling)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const userData = await response.json();

      // Store user data in local storage or a robust state management solution
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Add name attribute for form submission
                className="mt-1 p-2 w-full border rounded-md shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Add required attribute for validation
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" // Add name attribute for form submission
                className="mt-1 p-2 w-full border rounded-md shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Add required attribute for validation
              />
              <a href="#" className="text-xs text-gray-600 hover:text-gray-700 mt-2">
                Forgot password?
              </a>
            </div>
            <button
              type="submit" // Add type="submit" for form submission
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:text-blue-700">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;