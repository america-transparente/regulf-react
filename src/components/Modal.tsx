import { ReactNode, Dispatch } from "react";
import { Dialog } from "@headlessui/react";

interface Props {
  title?: string;
  description?: string;
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>; // setter
}

// TODO: search a way to create a custom useModal hook, add a better description
/**
 * Pass a useState with the modal state
 */
function Modal({ title, description, content, setIsOpen, isOpen }: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
        <Dialog.Panel>{content}</Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
