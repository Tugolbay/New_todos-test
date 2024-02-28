import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onModal: (bool: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
  onModal,
  children,
  title,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <p
        className="w-full h-full top-0 left-0"
        onClick={() => onModal(false)}
      />
      <div className="bg-white p-4 rounded-lg w-100% h-100% absolute z-30">
        <h2 className="flex justify-center text-[#9395D3]">{title}</h2>
        <div className=" flex flex-col p-[3rem] gap-4">{children}</div>
      </div>
    </div>
  );
};
