import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  isRegister: boolean; // true: register mode, false: login mode
}

const api = axios.create({
  baseURL: '/api/auth', 
  headers: {
    'Content-Type': 'application/json',
  },
});

const AuthForm: React.FC<Props> = ({ isRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const url = isRegister ? '/register' : '/login'; 
    const { firstName, lastName, email, password } = formData;

    const payload = isRegister
      ? { firstName, lastName, email, password }
      : { email, password };

    try {
      const response = await api.post(url, payload);
      const token = response.data.token;

      localStorage.setItem('token', token);
      setMessage({
        type: 'success',
        text: isRegister ? 'Registration successful!' : 'Login successful!',
      });

      console.log('Token:', token);
    } catch (err: any) {
      console.error('Error:', err.response);

      const resData = err.response?.data;

      const errorMessage =
        typeof resData === 'string'
          ? resData
          : resData?.message || 'Authentication failed. Please try again.';

      setMessage({ type: 'error', text: errorMessage });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* Show firstName and lastName only on registration form */}
      {isRegister && (
        <>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      {message && (
        <p
          className={`text-sm ${
            message.type === 'error' ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {message.text}
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  );
};

export default AuthForm;
