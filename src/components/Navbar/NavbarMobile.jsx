import { DropdownMenu } from "@kobalte/core";
import { createEffect, createSignal, For, Show } from "solid-js";
import { $navState } from "./NavState";
import ThemeBtn from "@components/ThemeBtn";
import navItems from "./NavItems";
import "./Navbar.css";
import LangBtn from "@components/ThemeBtn/LangBtn";

const NavbarMobile = () => {
  const [open, setOpen] = createSignal(false);
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
    <nav class="h-full flex items-center justify-between border-b-2 border-gray-200">
      <a className="pl-5 font-semibold normal-case text-lg cursor-default">
        Nhân Lê
      </a>
      <div class="flex items-center">
        <LangBtn />
        <ThemeBtn />
        <DropdownMenu.Root open={open()} onOpenChange={setOpen}>
          <DropdownMenu.Trigger class="btn btn-ghost hover:bg-base-200">
            <span class="text-uppercase">{currentSection()}</span>
            <DropdownMenu.Icon class="dropdown-menu__trigger-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
              </svg>
            </DropdownMenu.Icon>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content class="dropdown-menu__content min-w-[220px] bg-base-100 rounded-lg border-2 shadow-md outline-none">
              <DropdownMenu.Group>
                <DropdownMenu.RadioGroup
                  value={currentSection()}
                  onChange={(e) => setCurrentSection(e)}>
                  <For each={navItems}>
                    {(item) => (
                      <DropdownMenu.RadioItem
                        class={`dropdown-menu__radio-item ${
                          currentSection() === item.id ? "radio__active" : ""
                        }`}
                        value={item.id}
                        onClick={() => setOpen(false)}
                        disabled>
                        <Show
                          when={currentSection() !== item.id}
                          fallback={
                            <p class="cursor-not-allowed">{item.label}</p>
                          }>
                          <a href={`#${item.id}`} class="w-full h-full">
                            {item.label}
                          </a>
                        </Show>
                      </DropdownMenu.RadioItem>
                    )}
                  </For>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Group>
              <DropdownMenu.Arrow />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default NavbarMobile;
