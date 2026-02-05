import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaCheckCircle } from 'react-icons/fa';

const Toast = () => {
  const { toast } = useContext(CartContext);
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      {toast && (
        <div className="flex items-center gap-3 bg-white border border-green-200 shadow-xl rounded-xl px-4 py-3 animate-[fadeIn_.2s_ease-out]">
          <span className="text-green-500 text-xl"><FaCheckCircle /></span>
          <p className="text-sm font-medium text-zinc-800">{toast.message}</p>
        </div>
      )}
    </div>
  );
};

export default Toast;
