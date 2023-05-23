import { JSX } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function ChickenNavLink(props: JSX.HTMLAttributes) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div class="m-auto max-w-max ">
      <div class=" h-20 flex justify-center items-end">
        {isHovering
          ? (
            <img
              src="/images/webp/logo.webp"
              class="w-14 h-16 pb-4 "
              alt="Navigation Rooster: rooster appearing over currently hovered navigation link"
            />
          )
          : <div class=""></div>}
      </div>
      <a
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        href={props.link}
        target={props.external ? "_blank" : ""}
        className={props.className +
          " px-2 py-1 border(gray-100 2) hover:bg-gray-200 font-ambrose-light text-wedding-barn-red text-xl"}
        id={props.id || ''}
      >
        {props.children}
      </a>
    </div>
  );
}
