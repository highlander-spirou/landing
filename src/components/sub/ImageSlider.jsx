import { createEffect } from "solid-js";
import { register } from "swiper/element/bundle";
register();

const ImageSlider = () => {
  const autoplay = {
    delay: 5000,
  };
  let swiperRef;
  createEffect(() => {
    // const swiperContainer = swiperRef
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
              background-color: rgb(229 231 235);
            }
        `,
      ],
    };

    Object.assign(swiperRef, params);
    swiperRef.initialize();
  });
  return (
    <>
      <div>hello world</div>
      <swiper-container
        init="false"
        ref={swiperRef}
        autoplay={autoplay}
        loop="true"
        class="w-1/2 min-w-[300px]"
      >
        <swiper-slide class="flex justify-center items-center h-[200px]">
          Slide 1
        </swiper-slide>
        <swiper-slide class="flex justify-center items-center h-[200px]">
          Slide 2
        </swiper-slide>
        <swiper-slide class="flex justify-center items-center h-[200px]">
          Slide 3
        </swiper-slide>
      </swiper-container>
    </>
  );
};
export default ImageSlider;
