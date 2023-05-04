import { Head } from "$fresh/runtime.ts";
import NavBar from "@/islands/NavBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lds4gch.css" async>
        </link>
        <title>Oviedo Wedding Barn | About</title>
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
      <NavBar selected={1} />
      <img
        src="/images/webp/family.webp"
        alt="Oviedo Wedding Barn photo of owner's family during breaking ground"
      />
      <div class="p-4 mx-auto max-w-screen-md font-canada-type-gibson font-extralight">
        <p class="my-6 text-center font-ambroise-std text-2xl">Meet Our Family</p>
        <p class="my-6">
          We are proud to have 4 generations of family currently living in
          Oviedo, FL. Though you may not see all of us while planning your event
          with us, know that when having your event with The Wedding Barn you
          are welcomed as part of our family
        </p>

        <div class="flex flex-col sm:flex-row">
          <img
            src="/images/webp/david.webp"
            alt="section divider arrow"
            class="w-52 h-60"
          />
          <div class="sm:ml-6">
            <span class="font-ambroise-std text-2xl">David, Sales Manager</span>
            <br />
            <span class="my-6">
              When you visit The Wedding Barn, there is a good chance the first
              face you will see is David’s! An alumni from Northeastern
              University, David cultivated a career in management of sales. When
              given the opportunity to work with his family, he jumped to join
              the team as the Sales Manager. As a liason between you and the
              venue, you can always expect a smile when talking to David. In his
              free time he can be found playing board games, volunteering at a
              local summer camp, and hanging out with his beagle, Banjo. If you
              see him walking his dog, feel free to stop him and say hello!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
