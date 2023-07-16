import { createSignal } from "solid-js";

const items = [
  {
    img: "https://source.unsplash.com/gySMaocSdqs",
    title: "Shoes!",
    content: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    img: "https://source.unsplash.com/y-LHAtkQJgc",
    title: "Shoes!",
    content: "If a dog chews shoes whose shoes does he choose?",
  },
];

const CardSlider = () => {
  const [index, setIndex] = createSignal(1);

  const prev = () => {
    setIndex((prevValue) => (prevValue === 0 ? items.length - 1 : index() - 1));
  };
  const next = () => {
    setIndex((prevValue) => (prevValue === items.length - 1 ? 0 : index() + 1));
  };

  return (
    <>
      <div class="flex justify-center relative">
        <div class="card w-72 shadow-xl">
          <figure>
            <img src={items[index()].img} loading="lazy" class="w-72 aspect-video object-cover"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{items[index()].title}</h2>
            <p>{items[index()].content}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 flex items-center justify-between">
          <button class="btn btn-ghost" onclick={() => prev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button class="btn btn-ghost" onclick={() => next()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
