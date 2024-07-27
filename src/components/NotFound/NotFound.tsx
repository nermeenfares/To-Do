import React, { FC } from 'react';
import { Link } from 'react-router-dom'; 

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
    <div className="text-center">
      <h1 className="text-6xl font-extrabold text-blue-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white rounded-lg py-2 px-6 text-lg font-semibold hover:bg-blue-600 transition duration-150"
      >
        Go to Homepage
      </Link>
    </div>
  </div>
);

export default NotFound;
