import { Head } from "$fresh/runtime.ts";
import NavBar from "@/islands/NavBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lds4gch.css">
        </link>
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
      <div class="px-4 sm:px-0 mx-auto font-canada-type-gibson">
        <div>
          <div class="flex flex-col">
            <img src="/images/webp/zoomed-in-rafter.webp" alt="test" />
            <div class="relative self-center w-4/5  -top-16 opacity-75 border p-3 rounded-full mx-auto bg-white text-center text-wedding-barn-red font-ambroise-std text-xl">
              WELCOME TO THE WEDDING BARN
            </div>
          </div>

          <img
            src="/images/arrow.svg"
            alt="section divider arrow"
            class="p-8 rotate-180"
          />
        </div>
        <p class="my-6 mx-auto text-xl leading-loose max-w-screen-xl font-extralight">
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
        <p class=" py-8 font-ed-market text-center text-3xl text-wedding-barn-red">
          New Beginnings, Timeless Memories
        </p>
        <div id="mine" class="flex flex-row text-xs sm:text-base">
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
          <div class="p-2 text-center">
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
