import { PageProps } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import HeadElement from "@/islands/HeadElement.tsx";
import { FooterElement } from "@/components/FooterElement.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement
        description="At our wedding venue we are committed to excellence. Our team is dedicated to 
        ensuring that every aspect of your wedding, from planning to execution, is flawless. Explore 
        our facilities, customizable packages, and the magic that awaits you as you embark on the 
        journey of a lifetime."
        image={url.href + "images/webp/full-barn.webp"}
        title="The Wedding Barn - Oviedo, FL"
        url={url}
      />
      <NavBar />
      <img
        src="/images/webp/family.webp"
        alt="Oviedo Wedding Barn photo of owner's family during breaking ground"
      />
      <div class="p-4 mx-auto max-w-screen-md font-canada-type-gibson font-extralight">
        <p class="my-6 text-center font-ambroise-std text-2xl">
          Meet Our Family
        </p>
        <p class="my-6">
          We are proud to have 4 generations of family currently living in
          Oviedo, FL. Though you may not see all of us while planning your event
          with us, know that when having your event with The Wedding Barn you
          are welcomed as part of our family.
        </p>

        <div class="flex flex-col gap-10">
          <div class="flex flex-col sm:flex-row">
            <img
              src="/images/webp/natalie_headshot.webp"
              alt="Oviedo Wedding Barn Venue Manager Natalie Teuchert Bio Photo"
              class="w-48 h-60"
            />
            <div class="sm:ml-6">
              <span class="font-ambroise-std text-2xl">
                Natalie, Venue Manager
              </span>
              <br />
              <span class="my-6">
                Natalie was the family member with a vision and a dream. Having
                planned her wedding in the local area and finding there was no
                event space for her, she had a vision of bringing that social
                ground to the town she grew up in. With an engineering degree
                from Florida State University, she has an eye for detail and
                knows how to get things running. As the Venue Manager,
                Natalie leads the team and is passionate about your event. In
                her free time she can be found with her husband, Benjamin, and
                her two children, Henry and Theodore.
              </span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row">
            <img
              src="/images/webp/david.webp"
              alt="Oviedo Wedding Barn Sales Manager David Marini Bio Photo"
              class="w-48 h-60"
            />
            <div class="sm:ml-6">
              <span class="font-ambroise-std text-2xl">
                David, Sales Manager
              </span>
              <br />
              <span class="my-6">
                When you visit The Wedding Barn, there is a good chance the
                first face you will see is David’s! An alumni from Northeastern
                University, David cultivated a career in management of sales.
                When given the opportunity to work with his family, he jumped to
                join the team as the Sales Manager. As a liason between you and
                the venue, you can always expect a smile when talking to David.
                In his free time he can be found playing board games,
                volunteering at a local summer camp, and hanging out with his
                beagle, Banjo. If you see him walking his dog, feel free to stop
                him and say hello!
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterElement />
    </>
  );
}
