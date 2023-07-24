import { createEffect, Show, createSignal } from "solid-js";

const LangBtn = () => {
  const [language, setLanguage] = createSignal();

  let element;

  createEffect(() => {
    function handleClickOutside(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute("open");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  });

  createEffect(() => {
    setLanguage(document.documentElement.getAttribute("lang"));
  });
  return (
    <>
      <details class="dropdown mr-5" ref={element}>
        <summary class="btn btn-ghost px-3 text-center">
          <Show when={language() === "vi"} fallback={<span class="font-bold">EN</span>}>
            <span class="font-bold">VI</span>
          </Show>
        </summary>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a href="./">English</a>
          </li>
          <li>
            <a href="./vi">Vietnamese</a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default LangBtn;
