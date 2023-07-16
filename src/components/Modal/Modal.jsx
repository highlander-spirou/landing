import { Dialog } from "@kobalte/core";
import { $modalState } from "./ModalState";
import contents from "src/store";
import "./Modal.css";
import { createEffect, createSignal } from "solid-js";

const Modal = () => {
  const { isOpen, setOpen, contentID } = $modalState;
  const [modalContent, setModalContent] = createSignal({});

  createEffect(() => {
    const filterResult = contents.filter((x) => x.id === contentID());
    filterResult.length > 0 && setModalContent(filterResult[0]);
  });

  return (
    <Dialog.Root open={isOpen()} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" />
        <div class="fixed inset-0 z-[1000] grid place-items-center">
          <Dialog.Content class="dialog__content z-[1000] w-[95%] max-w-[500px] max-h-[350px] overflow-scroll border-1 rounded-lg p-4 bg-white shadow-lg ">
            <div class="flex justify-between items-baseline mb-4">
              <Dialog.Title class="text-2xl font-bold text-slate-600">
                {modalContent().title}
              </Dialog.Title>

              <Dialog.CloseButton class="btn btn-sm btn-circle btn-ghost">
                ✕
              </Dialog.CloseButton>
            </div>
            <Dialog.Description>
              <h1 class="font-xl">About this project</h1>
              {modalContent().long_description}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
