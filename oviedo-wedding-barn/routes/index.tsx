import { PageProps } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import { FooterElement } from "@/components/FooterElement.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement
        description="The Wedding Barn operates a beautiful event space right in the heart of Central Florida. Located just 20 min
        north of Orlando, our idyllic setting is a family owned and operated venue that prides itself on creating the perfect
        event for you. The offer of a beautiful setting, stellar customer service, and an inclusive setting are our promise to
        you. Originally built in 2023, the Wedding Barn features a fully air conditioned event venue, cocktail patio, custom bar,
        dressing suites, and a catering prep kitchen. You and your guests will enjoy mingling, and wandering the memorable
        grounds. As a premier reception venue, The Wedding Barn offers memories to last a life time."
        image={url.href + "images/webp/full-barn.webp"}
        title="The Wedding Barn - Oviedo, FL"
        url={url}
      />
      <NavBar />
      <div class="px-4 sm:px-0 mx-auto font-canada-type-gibson">
        <div>
          <div class="relative">
            <img
              src="/images/webp/zoomed-in-rafter.webp"
              alt="Oviedo Wedding Barn zoomed in interior view of rafters with chandeliers"
              class="w-full"
            />
            <div class="absolute inset-x-0 bottom-2">
              <div class="w-max opacity-90 border p-2 md:p-6 
              rounded-xl lg:rounded-3xl mx-auto bg-white text-center text-wedding-barn-red font-ambroise-std text-xl md:text-3xl">
                WELCOME TO THE WEDDING BARN
              </div>
            </div>
          </div>

          <img
            src="/images/arrow.svg"
            alt="section divider arrow"
            class=" pb-8 lg:px-8 rotate-180"
          />
        </div>
        <p class="px-4 my-6 mx-auto text-xl leading-loose max-w-screen-xl font-extralight">
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
        <img
          src="/images/webp/barn-door-view.webp"
          alt="Oviedo Wedding Barn outside view from barn doors angled toward the sky"
        />
        <p class=" py-8 font-ed-market text-center text-3xl text-wedding-barn-red">
          New Beginnings, Timeless Memories
        </p>
        <div class="flex flex-col font-extralight md:flex-row text-xl lg:text-2xl">
          <div class="flex flex-col p-2 text-center justify-items-center">
            <span class="mb-4">The Ceremony</span>
            <img
              src="images/webp/ceremony.webp"
              alt="Oviedo Wedding Barn view of outside ceremony with oak tree view"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col p-2 text-center justify-items-center">
            <span class="mb-4">The Venue</span>
            <img
              src="images/webp/interior.webp"
              alt="Oviedo Wedding Barn interior view from barn door showing dinner tables, chandeliers and interior styling"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col p-2 text-center justify-items-center">
            <span class="mb-4">The Stringlit Porch</span>
            <img
              src="images/webp/patio.webp"
              alt="Oviedo Wedding Barn outdoor stringlit porch view with sunset light draping over the roof"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <FooterElement />
    </>
  );
}
