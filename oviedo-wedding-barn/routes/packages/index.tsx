import { PageProps } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import HeadElement from "@/islands/HeadElement.tsx";
import { FooterElement } from "@/components/FooterElement.tsx";
export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement
        description="Planning the perfect wedding involves many choices, with one of the most significant 
        being your wedding venue. Your venue sets the stage for your special day and impacts your budget. 
        At The Wedding Barn, we're here to help you strike the perfect balance between your dream wedding 
        and your budget.
        In this guide, we'll explore wedding venue pricing, factors that influence costs, and tips to make 
        your dream wedding a reality within your budget. Let's get started on your journey to an 
        unforgettable wedding day that reflects your style and stays within your means."
        image={url.href + "images/webp/full-barn.webp"}
        title="Packages | The Wedding Barn - Oviedo, FL"
        url={url}
      />
      <NavBar />
      <div class={`flex flex-col items-center mt-10 gap-5 sm:(flex-row flex-wrap justify-center)`}>
        <div
          class={`flex flex-col max-w-[22rem] justify-center bg-wedding-barn-red m-5 p-5 items-center gap-2`}
        >
          <span
            class={`flex justify-center font-ambroise-std text-3xl text-white`}
          >
            WEDDINGS
          </span>
          <img
            src="images/webp/wedding.webp"
            alt=""
            class={`m-auto w-[20rem] h-52 `}
          />
          <span
            class={`flex justify-center font-beloved-script text-white text-4xl `}
          >
            Starting at $5000
          </span>
        </div>
        <div
          class={`flex flex-col max-w-[22rem] bg-wedding-barn-red m-5 p-5 items-center gap-2`}
        >
          <span
            class={`flex justify-center font-ambroise-std text-3xl text-white`}
          >
            CORPORATE
          </span>
          <img
            src="images/webp/event.webp"
            alt=""
            class={`m-auto p-2 w-[20rem]  h-52`}
          />
          <span
            class={`flex justify-center font-beloved-script text-white  text-4xl`}
          >
            Starting at $2300
          </span>
        </div>
        <div
          class={`flex flex-col max-w-[22rem]  bg-wedding-barn-red m-5 p-5 items-center gap-2`}
        >
          <span
            class={`flex justify-center font-ambroise-std text-3xl text-white`}
          >
            EVENTS
          </span>
          <img
            src="images/webp/celebrate.webp"
            alt=""
            class={`m-auto p-2 w-[20rem]  h-52`}
          />
          <span
            class={`flex justify-center font-beloved-script text-white  text-4xl`}
          >
            Starting at $2200
          </span>
        </div>
      </div>
      <div class="p-4 mx-auto max-w-screen-md  font-canada-type-gibson font-extralight">
        {/* <hr class="border-t-1 border-solid border-wedding-barn-red my-6" /> */}
        <p class="my-6 text-3xl text-center font-normal font-ambroise-std ">
          Submit a form{" "}
          <a
            class="underline hover:text-gray-400"
            href="https://www.honeybook.com/widget/the_wedding_barn_234791/cf_id/633da925dd2a5a0026b82a25"
            target="_blank"
          >
            here
          </a>{" "}
          to receive information on pricing.
        </p>
        <div class="text-2xl">
          What's Included
        </div>
        <div class="text-2xl bg-soft-red text-white opacity-50 p-5 my-4">
          We understand there is a lot that goes into planning a wedding. That
          is why all of our rentals include the following amenities at no added
          cost.
        </div>
        <section class="md:flex md:flex-col md:flex-wrap md:h-100 gap-5">
          <div class="md:w-1/2">
            <ul>
              <li class="text-lg font-bold">
                Ceremony, Cocktail Hour and Reception up to 200 guests
              </li>
              <li>Onsite venue manager</li>
              <li>Fully air conditioned/heated venue</li>
              <li>Handicap accessible</li>
              <li>String-lit cocktail hour porch</li>
              <li>On-site paved parking</li>
              <li>One hour rehearsal</li>
              <li>Note: Day of Wedding Coordinator required</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <ul>
              <li class="text-lg font-bold">Tables</li>
              <li>60" round tables and chairs for up to 200 guests</li>
              <li>Black or white tableclothes for rounds</li>
              <li>8ft banquet tables (3) used for buffet, DJ, gifts, etc.</li>
              <li>Sweetheart table with chairs</li>
              <li>Cake table</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <ul>
              <li class="text-lg font-bold">Chairs</li>
              <li>Outdoor ceremony seating for up to 200 guests</li>
              <li>Reception chairs for up to 200 guests</li>
              <li>Set up and break down of chairs/tables</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <ul>
              <li class="text-lg font-bold">
                Entertainment Equipment (by request)
              </li>
              <li>Projector</li>
              <li>Ceremony microphone</li>
              <li>Venue microphone</li>
              <li>Speakers</li>
              <li>Dance floor (18' x 18')</li>
              <li>Band stage (16' x 24')</li>
              <li>Wifi access</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <ul>
              <li class="text-lg font-bold">Food and Drink</li>
              <li>Use of our onsite catering prep kitchen</li>
              <li>Use of our custom bar</li>
            </ul>
          </div>
        </section>
        <hr class="border-t-1 border-solid border-wedding-barn-red my-6" />
        <section class="md:flex gap-5">
          <img
            src="/images/pricing-page-img.png"
            alt="Free use photo of bride and groom holding hands"
            class="md:w-1/2 my-6 md:my-0"
          />
          <div class="md:w-1/2">
            <ul>
              <li class="text-lg font-bold">Two Large Dressing Suites</li>
              <li>Full length mirrors</li>
              <li>Makeup stations</li>
              <li>Couches and lounges</li>
              <li>Audio speaker</li>
              <li>Dress hangers</li>
              <li>Private restroom</li>
            </ul>
          </div>
        </section>
      </div>

      <FooterElement />
    </>
  );
}
