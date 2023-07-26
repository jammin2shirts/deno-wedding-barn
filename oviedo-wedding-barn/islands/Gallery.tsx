import { JSX } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import IconCircleChevronsRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-right.tsx";
import IconCircleChevronsLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-chevrons-left.tsx";
import { ImgCarousel } from "@/components/ImgCarousel.tsx";

const SLIDE_DATA = [
  {
    color: "",
    text: "slide five",
    url: "images/webp/Website Gallery WebP/3D Render Barn.webp",
  },
  {
    color: "",
    text: "slide one",
    url: "/images/webp/ceremony.webp",
  },
  {
    color: "",
    text: "slide four",
    url: "/images/webp/patio.webp",
  },
  {
    color: "",
    text: "slide four",
    url: "/images/webp/zoomed-in-rafter.webp",
  },
  {
    color: "",
    text: "slide three",
    url: "/images/webp/interior.webp",
  },
  {
    color: "",
    text: "slide two",
    url: "/images/webp/full-barn.webp",
  },
];

export default function Gallery(props: JSX.HTMLAttributes) {
  let shownImgIndex = useSignal<number>(0);
  let clone: Array<any> = structuredClone(SLIDE_DATA);
  let chunks = [];
  const chunkSize = Math.floor(SLIDE_DATA.length / 3);
  console.log(chunkSize);
  while (clone.length > 0) {
    chunks.push(clone.splice(0, chunkSize));
  }
  return (
    <div class="mx-auto max-w-screen-lg font-canada-type-gibson">
      <ImgCarousel slides={SLIDE_DATA} currentSelected={shownImgIndex} />

      <div
        class={`mx-auto grid md:grid-cols-3 gap-5`}
      >
        {chunks.map((chunk, chunkIndex) => {
          return (
            <div class="flex flex-col gap-5">
              {chunk.map((image, index) => {
                return (
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={image.url}
                      alt={image.text}
                      onClick={() => {
                        shownImgIndex.value = (chunkIndex === 0)
                          ? index
                          : (chunkIndex * chunkSize) + index;
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
