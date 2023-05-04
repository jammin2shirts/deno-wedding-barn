import { Head } from "$fresh/runtime.ts";
import NavBar from "@/islands/NavBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oviedo Wedding Barn</title>
        <meta name="title" content="The Wedding Barn - Oviedo, FL" />
        <meta
          name="description"
          content="The Wedding Barn operates a beautiful event space right in the heart of Central Florida. Located just 20 min
        north of Orlando, our idyllic setting is a family owned and operated venue that prides itself on creating the perfect
        event for you. The offer of a beautiful setting, stellar customer service, and an inclusive setting are our promise to
        you. Originally built in 2023, the Wedding Barn features a fully air conditioned event venue, cocktail patio, custom bar,
        dressing suites, and a catering prep kitchen. You and your guests will enjoy mingling, and wandering the memorable
        grounds. As a premier reception venue, The Wedding Barn offers memories to last a life time."
        />
        <meta name="og:title" content="The Wedding Barn - Oviedo, FL" />
        <meta
          name="og:description"
          content="The Wedding Barn operates a beautiful event space right in the heart of Central Florida. Located just 20 min
        north of Orlando, our idyllic setting is a family owned and operated venue that prides itself on creating the perfect
        event for you. The offer of a beautiful setting, stellar customer service, and an inclusive setting are our promise to
        you. Originally built in 2023, the Wedding Barn features a fully air conditioned event venue, cocktail patio, custom bar,
        dressing suites, and a catering prep kitchen. You and your guests will enjoy mingling, and wandering the memorable
        grounds. As a premier reception venue, The Wedding Barn offers memories to last a life time."
        />
        <meta name="og:image" content="/images/webp/full-barn.webp" />
      </Head>
      <NavBar selected={0} />
      <div class="p-4 mx-auto max-w-screen-md">
        <div>
          <img src="/images/webp/zoomed-in-rafter.webp" alt="test" />
          <img src="/images/arrow.svg" alt="test" class="py-4 rotate-180" />
        </div>
        <p class="my-6">
          The Wedding Barn operates a beautiful event space right in the heart
          of Central Florida. Located just 20 min north of Orlando, our idyllic
          setting is a family owned and operated venue that prides itself on
          creating the perfect event for you. The offer of a beautiful setting,
          stellar customer service, and an inclusive setting are our promise to
          you. Originally built in 2023, the Wedding Barn features a fully air
          conditioned event venue, cocktail patio, custom bar, dressing suites,
          and a catering prep kitchen. You and your guests will enjoy mingling,
          and wandering the memorable grounds. As a premier reception venue, The
          Wedding Barn offers memories to last a life time.
        </p>
        <img src="/images/webp/barn-door-view.webp" alt="test" />
        <p class="text-center py-4 font-eds-market-main-script">
          New Beginnings, Timeless Memories
        </p>
        <div id="mine" class="flex flex-row">
          <div class="p-2 text-center">
            <span class="c-text">The Ceremony</span>
            <img
              src="images/webp/ceremony.webp"
              alt="wedding barn - ceremony with oak tree view"
              class="c-img"
              loading="lazy"
            />
          </div>
          <div class="p-2 text-center">
            <span class="c-text">The Venue</span>
            <img
              src="images/webp/interior.webp"
              alt="wedding barn - interior view from barn door"
              class="c-img"
              loading="lazy"
            />
          </div>
          <div class="p-2 font-canada-type-gibson text-center">
            <span class="c-text">The Stringlit Porch</span>
            <img
              src="images/webp/patio.webp"
              alt="wedding barn - stringlit porch view"
              class="c-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
