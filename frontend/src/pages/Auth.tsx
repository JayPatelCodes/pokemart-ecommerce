import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleMode = () => {
    setIsRegister(prev => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <AuthForm isRegister={isRegister} />
        <button
          onClick={toggleMode}
          className="mt-4 text-blue-500 hover:underline block mx-auto"
        >
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
