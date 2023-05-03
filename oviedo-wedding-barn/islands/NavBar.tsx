import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

import { ChickenNavLink } from "@/components/ChickenNavLink.tsx";
interface NavSelectedProps {
  selected: number;
}

export default function NavBar(props: NavSelectedProps) {
  const [selected, setSelected] = useState(props.selected);

  function navTo(url: string) {
    window.location.href = url;
  }

  function updateClassIfSelected(navNum: number): string {
    return (selected == navNum) ? "bg-red-900" : "";
  }

  return (
    <div class="flex gap-2 w-full justify-center">
      <div class="flex w-1/5 justify-end">
        <div class="flex ">
          <ChickenNavLink link="/">HOME</ChickenNavLink>
          <ChickenNavLink link="/about">ABOUT</ChickenNavLink>
        </div>
      </div>
      <div class="flex">
        <img
          src="/images/WB4.png"
          class="w-52 h-52"
          alt="The Oviedo Wedding Barn logo: weathervane rooster draped company name and above location and established year"
        />
      </div>
      <div class="flex w-3/10">
        <ChickenNavLink link="/packages">PACKAGES</ChickenNavLink>
        <ChickenNavLink
          link="https://www.honeybook.com/widget/the_wedding_barn_234791/cf_id/633da925dd2a5a0026b82a25"
          external={true}
        >
          CONTACT
        </ChickenNavLink>
        <ChickenNavLink link="/gallery">GALLERY</ChickenNavLink>
      </div>
    </div>
  );
}
