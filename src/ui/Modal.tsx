import { X } from "lucide-react";
import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  closeModal: (value: boolean) => void;
};

export default function Modal({ children, isOpen, closeModal }: ModalProps) {
  const targetNode = document.getElementById("modal-root") as HTMLElement;

  function handleModalClose() {
    closeModal?.(false);
  }

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20 transition duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full ">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="font-bold text-lg text-heading">Add New Task</h2>
          <Button onClick={handleModalClose} bgClasses="">
            <X size={15} className="text-muted" />
          </Button>
        </div>
        <hr className="relative border-border" />
        <div className="p-6">{children}</div>
        <div className="flex gap-2 p-6 justify-end">
          <Button
            bgClasses="bg-white"
            className="text-heading! border border-border"
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button disabled>Add Task</Button>
        </div>
      </div>
    </div>,
    targetNode,
  );
}
