import Link from 'next/link';

export default function Success() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Card container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        {/* Icon: Checkmark */}
        <div className="flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <svg className="w-10 h-10 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-center mb-4">Payment Successful!</h1>
        <p className="text-gray-600 text-center mb-8">Thank you for your purchase.</p>

        {/* Button */}
          <button className="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-200">
            <Link href="/" passHref> Back to home page.</Link>
          </button>
      </div>
      
    </div>
  );
};
