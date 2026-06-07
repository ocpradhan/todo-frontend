import { X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Modal() {
  const targetNode = document.body;

  if (!targetNode) return null;

  return createPortal(
    <div className="fixed inset-0">
      <div className="absolute inset">
        <h2>Add New Task</h2>
        <X />
        <hr />
      </div>
    </div>,
    targetNode,
  );
}
