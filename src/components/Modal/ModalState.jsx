import { createSignal, createRoot } from "solid-js";

export const $modalState = createRoot(function () {
  const [isOpen, setOpen] = createSignal(false);
  const [contentID, setContentID] = createSignal(0)
  return { isOpen, setOpen, contentID, setContentID };
});
