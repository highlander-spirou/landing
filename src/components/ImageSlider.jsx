import { createSignal, onCleanup } from "solid-js";


const Carousel = ({ children }) => {
  const [curr, setCurr] = createSignal(0);
  const prev = () => {
    setCurr((prev) => (prev === 0 ? 3 : curr() - 1));
  };
  const next = () => {
    setCurr((prev) => (prev === 3 ? 0 : curr() + 1));
  };

  const slideInterval = setInterval(next, 20000);
  onCleanup(() => clearInterval(slideInterval));


  const [touchStartX, setTouchStartX] = createSignal(null);
  const [touchStartY, setTouchStartY] = createSignal(null);
  const [touchEndX, setTouchEndX] = createSignal(null);
  const [touchEndY, setTouchEndY] = createSignal(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEndX(null); // otherwise the swipe is fired even with usual touch events
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStartX() || !touchEndX()) return;
    const distanceX = touchStartX() - touchEndX();
    const distanceY = touchStartY() - touchEndY();
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    if (isLeftSwipe && Math.abs(distanceY) < 50) {
      console.log("swipe left");
      next();
    }
    if (isRightSwipe && Math.abs(distanceY) < 50) {
      console.log("swipe right");
      prev();
    }
  };

  return (
    <>
      <div>
        <div
          class="overflow-hidden relative bg-gray-200 z-10 aspect-[4/3] w-full sm:h-[390px] rounded-lg border-2"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchEnd={(e) => onTouchEnd(e)}
          onTouchMove={(e) => onTouchMove(e)}
        >
          <div
            class="flex transition-transform ease-out duration-500 items-start h-full"
            style={{ transform: `translateX(-${curr() * 100}%)` }}
          >
            {children}
          </div>
          <div class="absolute inset-0 flex items-center justify-between p-4">
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
            <div class="-z-10">
              <span class="loading loading-bars loading-lg"></span>
            </div>
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
          <div class="absolute bottom-4 left-0 right-0">
            <div class="flex items-center justify-center gap-2">
              {[0,0,0,0].map((_, i) => {
                return (
                  <div
                    class={`transition w-3 h-3 bg-slate-400 rounded-full ${
                      curr() === i ? "" : "bg-opacity-50"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
