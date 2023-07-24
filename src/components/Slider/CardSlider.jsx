import { For } from "solid-js";
import { Image } from "@kobalte/core";
import { $selectState } from "@components/Select/SelectState";
import { ModalControlBtn } from "@components/Modal";
import contents from "src/store";
import "./CardSlider.css";

const Card = ({ content }) => {
  return (
    <>
      <div class="card bg-base-100 w-[280px] h-[400px] border-2 border-gray-300 rounded-xl">
        <figure>
          <Image.Root>
            <Image.Img
              class="bg-slate-500 w-full aspect-video object-cover"
              src={content.img.src}
              alt="Content Image"
              decoding="async"
            />
            <Image.Fallback class="loading loading-spinner grid place-content-center"></Image.Fallback>
          </Image.Root>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{content.title}</h2>
          <p>{content.short_description}</p>
          <div class="card-actions justify-end">
            <ModalControlBtn text="Read more" currentID={content.id} />
          </div>
        </div>
      </div>
    </>
  );
};

const CardSlider = () => {
  const { currentSelection } = $selectState;
  const displayItems = () =>
    currentSelection() === "All"
      ? contents
      : contents.filter((x) => x.tag === currentSelection());

  const prev = () => {
    const screenWidth = screen.width;
    if (screenWidth > 640) {
      document.getElementById("formList").scrollLeft -= 280 - 40;
    } else {
      document.getElementById("formList").scrollLeft -= 280;
    }
  };

  const next = () => {
    const screenWidth = screen.width;
    if (screenWidth > 640) {
      document.getElementById("formList").scrollLeft += 280 - 40;
    } else {
      document.getElementById("formList").scrollLeft += 280;
    }
  };

  return (
    <>
      <div class="flex items-center justify-center">
        <button class="btn btn-ghost p-0 sm:px-4 -ml-5" onclick={prev}>
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          class="overflow-x-scroll relative w-[280px] sm:w-[600px] snap-x snap-mandatory"
          id="formList">
          <div class="flex w-max gap-10 sm:gap-[40px] snap-x ">
            <For each={displayItems()}>
              {(x) => (
                <div class="card__item snap-center">
                  <Card content={x} />
                </div>
              )}
            </For>
          </div>
        </div>
        <button class="btn btn-ghost p-0 sm:px-4 -mr-5" onclick={next}>
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CardSlider;
