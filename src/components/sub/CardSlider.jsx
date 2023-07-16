import { createSignal, createEffect, For, Show } from "solid-js";

import { register } from "swiper/element/bundle";
import Card from "./Card";
import Modal from "./Modal";

register();

const cards = [
  {
    img: "https://source.unsplash.com/gySMaocSdqs",
    title: "Developer dog",
    content: "This is a developer dog. Try to code sth",
  },
  {
    img: "https://source.unsplash.com/PSn57PpKvnA",
    title: "KIA Car",
    content: "This is a car, obviously.",
  },
];

const CardSlider = () => {
  const [open, setOpen] = createSignal(false);
  const [modalContent, setModalContent] = createSignal({
    title: "",
    content: "",
  });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setOpen(true);
  };

  const autoplay = {
    delay: 5000,
  };
  let swiperRef;
  createEffect(() => {
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
            .swiper-button-next,
            .swiper-button-prev {
              height:1.5rem;
              color: rgb(107 114 128);
              padding: 0.5rem 1rem;
              border-radius: 0.25rem;
            }
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: rgba(229, 231, 235, 0.7);
            }
        `,
      ],
    };

    Object.assign(swiperRef, params);
    swiperRef.initialize();
  });
  return (
    <>
      <swiper-container
        init="false"
        ref={swiperRef}
        autoplay={autoplay}
        loop="true"
        class="sm:max-w-[500px]"
      >
        <For each={cards}>
          {(card) => (
            <swiper-slide class="flex justify-center items-center px-[60px] sm:px-[100px]">
              <Card
                img={card.img}
                title={card.title}
                content={card.content}
                openModal={openModal}
              />
            </swiper-slide>
          )}
        </For>
      </swiper-container>
      <Show when={open()}>
        <Modal open={open} setOpen={setOpen} title={modalContent().title}>
          <p>"{modalContent().content}" is rendered inside of modal</p>
        </Modal>
      </Show>
    </>
  );
};
export default CardSlider;
