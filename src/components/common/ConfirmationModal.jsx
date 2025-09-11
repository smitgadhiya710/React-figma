import React from "react";
import Button from "./Button";

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800">{message}</h2>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            label={"cancle"}
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          />

          <Button
            label={"Confirm"}
            onClick={onConfirm}
            className="px-4 py-2 border-b-neutral-900 bg-red-500 text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
