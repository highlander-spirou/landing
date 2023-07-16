import { For, createEffect } from "solid-js";
import { $navState } from "./NavState";
import navItems from "./NavItems";
import "./Navbar.css";

const Navbar = () => {
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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="font-semibold normal-case text-xl cursor-default">
          Nhân Lê
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <For each={navItems}>
            {(item) => (
              <li
                class={`${currentSection() === item.id ? "radio_active" : ""}`}
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
