'use client';

import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='w-10/12 sm:w-6/12 md:w-5/12 xl:w-4/12 px-10 py-5 bg-white drop-shadow-md'>
        <div className='text-center mb-5 text-lg font-bold text-gray-150'>
          <h3>SOIOT SYSTEM</h3>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
