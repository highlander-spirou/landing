import { For, createEffect } from "solid-js";
import { ModalControlBtn } from "@components/Modal";
import contents from "src/store";
import { register } from "swiper/element/bundle";
register();
// const Card = ({ id, content }) => {
//   return (
//     <>
//       <div>{content}</div>
//       <ModalControlBtn text="Read more" currentID={id} />
//     </>
//   );
// };

const Card = ({ content }) => {
  return (
    <>
      <div class="card bg-base-100">
        <figure>
          <img src={content.img} loading="lazy" />
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

        <For each={contents}>
          {(content) => (
            <swiper-slide class="flex justify-center items-center px-[60px] sm:px-[100px]">
              <Card
                content={content}
              />
            </swiper-slide>
          )}
        </For>
      </swiper-container>
    </>
  );
};

export default CardSlider;
