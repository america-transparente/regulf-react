import { ReactNode, Dispatch } from "react";
import { Dialog } from "@headlessui/react";
import { CancelIcon } from "./icons";
import Button from "./Button";

interface Props {
  title?: string;
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>; // setter
}

// TODO: search a way to create a custom useModal hook, add a better description
/**
 * Pass a useState with the modal state
 */
function Modal({ title, content, setIsOpen, isOpen }: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl">
          <div className="w-full flex justify-between pt-2 px-4 items-center">
            <h3 className="font-extrabold text-2xl text-font">{title}</h3>
            <Button
              buttonType="primary"
              className="px-2"
              onClick={() => setIsOpen(false)}
            >
              <CancelIcon />
            </Button>
          </div>
          <div>{content}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
