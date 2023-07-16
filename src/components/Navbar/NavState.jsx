import { createSignal, createRoot } from "solid-js";

export const $navState = createRoot(function () {
    const [currentSection, setCurrentSection] = createSignal("introduction");

  return { currentSection, setCurrentSection };
});
