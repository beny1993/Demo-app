/* eslint-disable max-len */
import React, { useState } from 'react';
import { LoginForm } from '@/components/forms';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    console.log({values})
    setLoading(false);
  };

  return (
    <div className=" bg-[#0064aa] min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-7 bg-white w-96 rounded-md">
        <LoginForm onFinish={onFinish} loading={loading} />
      </div>
    </div>
  );
};

Login.layout = 'default';

export default Login;
