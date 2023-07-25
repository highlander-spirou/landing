import { createEffect, createSignal } from "solid-js";

const LangBtn = () => {
  const [curLang, setCurLang] = createSignal("")
  createEffect(() => {
    setCurLang(document.documentElement.getAttribute("lang"))
  });
  return (
    <>
      <a class="uppercase" href={curLang() === "vi" ? "/" : "/vi"}>{curLang()}</a>
    </>
  );
};

export default LangBtn;
