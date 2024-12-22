// components/ui/modal.tsx
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-card p-4 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={onClose} className="text-red-500 float-right">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
