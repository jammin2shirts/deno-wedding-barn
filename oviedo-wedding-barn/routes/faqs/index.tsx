import Faq from "@/islands/FAQ.tsx";
import NavBar from "@/islands/NavBar.tsx";
import HeadElement from "@/islands/HeadElement.tsx";
import { FooterElement } from "@/components/FooterElement.tsx";
export default function Faqs(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement
        description="Congratulations on your wedding journey! Choosing the perfect venue is a pivotal step in 
        bringing your dream wedding to life. This Wedding Venue FAQ provides answers to common questions, 
        helping you navigate the exciting yet overwhelming process of venue selection. Your venue sets the 
        tone for your celebration, and this guide will empower you to make an informed decision. Let's get 
        started on your path to finding the ideal wedding venue."
        image={url.href + "images/webp/full-barn.webp"}
        title="FAQ | The Wedding Barn - Oviedo, FL"
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
