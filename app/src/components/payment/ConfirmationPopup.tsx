import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition duration-300"
        >
          <AiOutlineClose size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Cancel Payment Process?</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to cancel the payment process? 
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
