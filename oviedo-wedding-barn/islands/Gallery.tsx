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
    text: "slide one",
    url: "/images/webp/Website Gallery WebP/3D Render Barn.webp",
  },
  {
    color: "",
    text: "slide two",
    url: "/images/webp/Website Gallery WebP/3D Render Patio.webp",
  },
  {
    color: "",
    text: "slide three",
    url: "/images/webp/Website Gallery WebP/3D Render inside.webp",
  },
  {
    color: "",
    text: "slide four",
    url: "/images/webp/Website Gallery WebP/Barn Progress 1.webp",
  },
  {
    color: "",
    text: "slide five",
    url: "/images/webp/Website Gallery WebP/Beam Beauty 2.webp",
  },
  {
    color: "",
    text: "slide six",
    url: "/images/webp/Website Gallery WebP/Beam Beauty.webp",
  },
    {
    color: "",
    text: "slide seven",
    url: "/images/webp/Website Gallery WebP/Center Barn Progress.webp",
  },
    {
    color: "",
    text: "slide eight",
    url: "/images/webp/Website Gallery WebP/Center Post and Beam.webp",
  },
    {
    color: "",
    text: "slide nine",
    url: "/images/webp/Website Gallery WebP/Lean to Build.webp",
  },
      {
    color: "",
    text: "slide ten",
    url: "/images/webp/Website Gallery WebP/Lean to Progress.webp",
  },
     {
    color: "",
    text: "slide eleven",
    url: "/images/webp/Website Gallery WebP/Progress Pic 1.webp",
  },
     {
    color: "",
    text: "slide twelve",
    url: "/images/webp/Website Gallery WebP/Progress Pic Ceiling.webp",
  },
     {
    color: "",
    text: "slide thirteen",
    url: "/images/webp/Website Gallery WebP/Tongue and Groove Ceiling.webp",
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
