import { PageProps } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import Gallery from "@/islands/Gallery.tsx";
import  HeadElement  from "@/islands/HeadElement.tsx";
import { FooterElement } from "@/components/FooterElement.tsx";
export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement
        description="Welcome to our wedding venue gallery, a visual showcase of our breathtaking 
        spaces and settings designed to make your special day unforgettable. Explore this curated 
        collection of images, find inspiration, and envision your dream wedding at The Wedding Barn. 
        Contact our team to turn your dreams into reality."
        image={url.href + "images/webp/full-barn.webp"}
        title="Gallery | The Wedding Barn - Oviedo, FL"
        url={url}
      />
      <NavBar />
      <Gallery />

      <FooterElement />
    </>
  );
}
