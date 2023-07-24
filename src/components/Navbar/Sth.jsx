import { createEffect } from "solid-js";
import { $navState } from "./NavState";

const Sth = () => {
  const { currentSection, setCurrentSection } = $navState;

  createEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      let sectionId;
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        sectionId = section.getAttribute("id");
        if (
          window.scrollY > sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          setCurrentSection(sectionId);
        }
      });
    });
  });
  return (
    <div class="fixed z-[9999] bottom-0 inset-x-0 h-5 bg-red-300Nav">
      {currentSection()}
    </div>
  );
};

export default Sth;
