import { createEffect, createSignal } from "solid-js";
import { introductionContent } from "src/store/content";
import "./BounceText.css";

const BounceText = () => {
  const [text, setText] = createSignal("");
  createEffect(() => {
    setText(introductionContent[document.documentElement.getAttribute("lang")].line1)
  });
  return (
    <div class="ten mb-2">
      <div>
        <h3 class="bounce text-5xl font-semibold">
          {text()
            .split("")
            .map((x) => (
              <span class="uppercase">{x}</span>
            ))}
        </h3>
      </div>
    </div>
  );
};

export default BounceText;
