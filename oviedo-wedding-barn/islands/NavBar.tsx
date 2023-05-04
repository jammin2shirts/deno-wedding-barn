import { useState } from "preact/hooks";
import { Button } from "@/components/Button.tsx";
import { ChickenNavLink } from "@/components/ChickenNavLink.tsx";
import { MobileNavMenu } from "@/components/MobileNavMenu.tsx";

export default function NavBar() {
  return (
    <>
    <div class="flex gap-2 w-full justify-center">
      <div class="lg:invisible visible">
        <MobileNavMenu />
      </div>
      <div class="flex flex-col w-2/5 justify-center invisible lg:visible">
        <div class="flex">
          <ChickenNavLink link="/">HOME</ChickenNavLink>
          <ChickenNavLink link="/about">ABOUT</ChickenNavLink>
        </div>
        <img class="rotate-180" alt="right-arrow" src="/images/arrow.svg" />
      </div>
      <div class="flex">
        <img
          src="/images/webp/WB4.webp"
          class="w-32 h-24 lg:w-52 lg:h-52"
          alt="The Oviedo Wedding Barn logo: weathervane rooster draped company name and above location and established year"
        />
      </div>
      <div class="flex flex-col lg:w-3/10 w-2/5 justify-center invisible lg:visible">
        <div class="flex ">
          <ChickenNavLink link="/packages">PACKAGES</ChickenNavLink>
          <ChickenNavLink
            link="https://www.honeybook.com/widget/the_wedding_barn_234791/cf_id/633da925dd2a5a0026b82a25"
            external={true}
          >
            CONTACT
          </ChickenNavLink>
          <ChickenNavLink link="/gallery">GALLERY</ChickenNavLink>
        </div>
        <img class="arrow" alt="right-arrow" src="/images/arrow.svg" />
      </div>
    </div>
      <p class="flex w-full justify-center font-ambrose-std text-3xl text-wedding-barn-red">
      OPENING 2023
      </p>
      </>
  );
}
