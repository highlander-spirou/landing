import { createEffect, createSignal, For } from "solid-js";
import { Dialog } from "@kobalte/core";
import { $modalState } from "./ModalState";

import { experienceContent } from "src/store/content";
import contents from "src/store";
import "./Modal.css";

const Modal = () => {
  const { isOpen, setOpen, contentID } = $modalState;
  const [lang, setLang] = createSignal({});
  const [modalContent, setModalContent] = createSignal({});

  createEffect(() => {
    setLang(experienceContent[document.documentElement.getAttribute("lang")])
  });
  createEffect(() => {
    const filterResult = contents.filter((x) => x.id === contentID());
    filterResult.length > 0 && setModalContent(filterResult[0]);
  });

  return (
    <Dialog.Root open={isOpen()} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" />
        <div class="fixed inset-0 z-[1000] grid place-items-center">
          <Dialog.Content class="dialog__content z-[1000] w-[95%] max-w-[500px] max-h-[350px] overflow-scroll border-1 rounded-lg p-4 bg-base-100 shadow-lg ">
            <div class="flex justify-between items-baseline">
              <Dialog.Title class="text-2xl font-bold text-slate-600 dark:text-base-content">
                {modalContent().title}
              </Dialog.Title>
              <Dialog.CloseButton class="btn btn-sm btn-circle btn-ghost">
                ✕
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="flex flex-col gap-3 mt-3">
              <h1 class="text-xl font-semibold text-slate-600 dark:text-base-content">{lang()["modal.title1"]}</h1>
              <p class="leading-relaxed">{modalContent().long_description}</p>
              <h1 class="text-xl font-semibold text-slate-600 dark:text-base-content">{lang()["modal.title2"]}</h1>
              <section class="flex flex-col gap-2">
                <For each={modalContent().including}>
                  {(x) => (
                    <div class="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                      <p>{x}</p>
                    </div>
                  )}
                </For>
              </section>
              <a class="link-secondary hover:underline" href={modalContent().link} target="_blank">Project link</a>
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
