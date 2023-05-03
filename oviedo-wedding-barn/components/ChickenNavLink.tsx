import { JSX } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function ChickenNavLink(props: JSX.HTMLAttributes) {
  const [isHovering, setIsHovering] = useState(false);
  console.dir(props);
  return (
    <div class=" m-auto max-w-screen-md ">
      <div class="w-full flex justify-center">
        {isHovering
          ? (
            <img
              src="/images/nav-rooster.png"
              class="w-10 h-10"
              alt="Navigation Rooster: rooster appearing over currently hovered navigation link"
            />
          )
          : <div class="w-10 h-10"></div>}
      </div>
      <a
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        href={props.link}
        target={props.external ? "_blank" : ""}
        className={props.className +
          " px-2 py-1 border(gray-100 2) hover:bg-gray-200 font-ambrose-light text-wedding-barn-red text-xl"}
      >
        {props.children}
      </a>
    </div>
  );
}
