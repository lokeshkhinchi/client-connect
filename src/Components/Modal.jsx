import React from 'react';
import { Div } from './StyledComponents';

const Modal = ({ isOpen, onClose, title, onSubmit, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex items-center inset-0 z-50 overflow-auto bg-black bg-opacity-50">
      <div className="relative w-96 mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Div className="overflow-auto" style={{maxHeight: 'calc(100vh - 100px)'}}>
        {children}
        </Div>
      </div>
    </div>
  );
};

export default Modal;