import React from 'react';

const Modal = ({ isOpen, onClose, title, onSubmit, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
      <div className="relative w-1/2 m-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit}>
          {children}
          
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
            <button onClick={onClose} className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;