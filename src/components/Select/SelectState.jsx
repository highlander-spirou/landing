import { createSignal, createRoot } from "solid-js";

export const $selectState = createRoot(function () {
  const [currentSelection, setCurrentSelection] = createSignal("All");

  return { currentSelection, setCurrentSelection };
});
