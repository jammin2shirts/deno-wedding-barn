import { JSX } from "preact";
import { useState } from "preact/hooks";
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu-2.tsx";

interface MobileNavProps {
  selected: number;
}

export function MobileNavMenu(props: MobileNavProps) {
  const [selected, setSelected] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Packages", link: "/packages" },
    { name: "Contact", link: "https://www.honeybook.com/widget/the_wedding_barn_234791/cf_id/633da925dd2a5a0026b82a25" },
    { name: "Gallery", link: "/gallery" },
  ];
  return (
    <div class="absolute top-1 left-1">
      <IconMenu2
        onClick={() => {
          setSelected(!selected);
        }}
        class="w-8 h-8 border rounded-full p-1 active:bg-gray-100"
      />
      {selected &&
        (
          <nav class="flex flex-col  border-solid border-2  bg-wedding-barn-red rounded-md">
            {links.map((link) => {
              return (
                <a class="hover:bg-white hover:text-black text-xl text-uppercase  text-white font-ambrose-light px-4" href={link.link} target={link.name === "Contact"? "_blank" : null}>{link.name}</a>
              );
            })}
          </nav>
        )}
    </div>
  );
}
