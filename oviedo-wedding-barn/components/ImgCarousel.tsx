import { useState } from "preact/hooks";
import { Signal } from "@preact/signals";
import IconCircleChevronsRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-right.tsx";
import IconCircleChevronsLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-left.tsx";

export function ImgCarousel(
  props: {
    slides: { color: string; url: string; text: string };
    currentSelected: Signal<number>;
  },
) {
  const {slides, currentSelected} = props
  const nextSlide = (direction: number) => {
    if (currentSelected.value === 0 && direction === -1) {
      currentSelected.value = slides.length - 1;
    } else if (currentSelected.value === slides.length - 1 && direction === 1) {
      currentSelected.value = 0;
    } else {
      currentSelected.value += direction;
    }
  };
  return (
    <div className="md:p-5 flex justify-between items-center mb-10 ">
      <IconCircleChevronsLeft
        class={`w-10 h-10 text-black cursor-pointer`}
        onClick={() => nextSlide(-1)}
      />
      <img
        src={slides[currentSelected.value].url}
        class={`max-w-sm md:max-w-lg object-scale-down`}
      />
      <IconCircleChevronsRight
        class={` w-10 h-10 text-black cursor-pointer `}
        onClick={() => nextSlide(1)}
      />
    </div>
  );
}
