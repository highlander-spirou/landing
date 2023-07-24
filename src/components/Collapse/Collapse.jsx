import { createEffect, createSignal } from "solid-js";
import { For } from "solid-js";
import { Accordion } from "@kobalte/core";
import "./Collapse.css";
import { accordionContent } from "src/store/content";

const Collapse = () => {
  const [content, setContent] = createSignal({});
  createEffect(() => {
    setContent(
      accordionContent[document.documentElement.getAttribute("lang")]
    );
  });
  return (
    <Accordion.Root
      class="w-[90%] max-w-[600px] rounded-md border-[1px] border-gray-300 mx-auto mt-5"
      collapsible>
      <For each={content()}>
        {(block) => (
          <Accordion.Item class="accordion__item" value={block.title}>
            <Accordion.Header class="accordion__item-header">
              <Accordion.Trigger class="accordion__item-trigger">
                <span>{block.title}</span>
                <div class="accordion__item-trigger-icon" aria-hidden>
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content class="px-3 accordion__item-content">
              {block.content}
            </Accordion.Content>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  );
};

export default Collapse;
