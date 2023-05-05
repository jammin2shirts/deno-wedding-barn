import { useState } from "preact/hooks";
import { Button } from "@/components/Button.tsx";
import { ChickenNavLink } from "@/components/ChickenNavLink.tsx";
import { MobileNavMenu } from "@/components/MobileNavMenu.tsx";

export default function NavBar() {
  return (
    <>
      <div class="flex w-full justify-center font-ambroise-std">
        <div class="lg:hidden flex">
          <MobileNavMenu />
        </div>
        <div class="hidden lg:flex lg:flex-col lg:justify-center lg:w-1/3">
          <div class="flex">
            <ChickenNavLink link="/">HOME</ChickenNavLink>
            <ChickenNavLink link="/about">ABOUT</ChickenNavLink>
          </div>
          <img class="rotate-180" alt="left-arrow" src="/images/arrow.svg" />
        </div>
        <div class="flex min-w-fit ">
          <img
            src="/images/webp/WB4.webp"
            class="w-52"
            alt="The Oviedo Wedding Barn logo: weathervane rooster draped company name and above location and established year"
          />
        </div>
        <div class="hidden lg:flex lg:flex-col lg:justify-center lg:w-1/3">
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
          <img alt="right-arrow" src="/images/arrow.svg" />
        </div>
      </div>
      <p class="flex lg:my-6 w-full justify-center font-ambroise-std text-3xl font-light text-wedding-barn-red">
        OPENING 2023
      </p>
    </>
  );
}
