import Faq from "@/islands/FAQ.tsx";
import NavBar from "@/islands/NavBar.tsx";
import HeadElement from "@/islands/HeadElement.tsx";
import { FooterElement } from "@/components/FooterElement.tsx";
export default function Faqs(ctx: PageProps) {
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
      <div class={`flex justify-center my-20`}>
        <Faq />
      </div>
      <FooterElement />
    </>
  );
}
