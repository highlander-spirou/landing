import { DropdownMenu } from "@kobalte/core";
import { createEffect, createSignal, For, Show } from "solid-js";
import { $navState } from "./NavState";
import ThemeBtn from "@components/ThemeBtn";
import navItems from "./NavItems";
import "./Navbar.css";
import LangBtn from "@components/ThemeBtn/LangBtn";

const NavbarTest = () => {
  const [open, setOpen] = createSignal(false);
  const [tracking, setTrack] = createSignal(1);
  const { currentSection, setCurrentSection } = $navState;

  createEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener(
      "scroll",
      () => {
        let sectionId;
        window.scrollY > 0 && setTrack(window.scrollY);

        sections.forEach((section) => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          sectionId = section.getAttribute("id");
          if (
            tracking() > sectionTop &&
            tracking() <= sectionTop + sectionHeight
          ) {
            setCurrentSection(sectionId);
          }
        });
      },
      false
    );
  });



  return (
    <nav class="h-full flex items-center justify-between border-b-2 border-gray-200">
      <a className="pl-5 font-semibold normal-case text-lg cursor-default">
        Nhân Lê
      </a>
    </nav>
  );
};

export default NavbarTest;
