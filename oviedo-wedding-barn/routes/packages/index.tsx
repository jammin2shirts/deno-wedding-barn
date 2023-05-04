import { Head } from "$fresh/runtime.ts";
import NavBar from "@/islands/NavBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lds4gch.css">
        </link>
        <title>Oviedo Wedding Barn | Packages</title>
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
      <NavBar selected={2} />
      <div class="p-4 mx-auto max-w-screen-md font-canada-type-gibson">
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
      </div>
    </>
  );
}
