import Link from 'next/link';

export default function PaymentFailed() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Card container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        {/* Icon: Crossmark */}
        <div className="flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
          <svg className="w-10 h-10 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-center mb-4">Payment Failed!</h1>
        <p className="text-gray-600 text-center mb-8">There was an issue processing your payment. Please try again.</p>

        {/* Button */}
        <a href="/" className="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-200">Back to home page</a>
      </div>
      
    </div>
  );
};

