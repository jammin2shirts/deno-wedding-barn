export function FooterElement() {
  return (
    <footer class="flex flex-col md:flex-row justify-center gap-5 font-canada-type-gibson font-extralight my-5">
      <section class="flex flex-col md:flex-row md:justify-end items-center text-center md:text-left ">
        <img
          src="images/webp/logo.webp"
          alt="Weathervane Rooster logo in footer"
          class="w-32 md:w-20"
        />
        <div>
          <p class=" text-lg">SAVE THE DATE.</p>
          <a
            id="footer-tour"
            href="https://www.honeybook.com/widget/the_wedding_barn_234791/cf_id/633da925dd2a5a0026b82a25"
            target="_blank"
            class="underline text-2xl text-blue-800 hover:bg-gray-200"
          >
            SCHEDULE A TOUR TODAY.
          </a>
        </div>
      </section>
      <div class=" hidden md:block md:border-l-2"></div>
      <section class="flex flex-row  md:justify-start gap-5 justify-center ">
        <div class="flex flex-col gap-2 md:my-auto">
          <a id="owb-fb" href="https://www.facebook.com/oviedoweddingbarn" target="_blank">
            <img
              src="/images/f_logo_RGB-Blue_1024.png"
              alt="facebook Icon"
              class="w-10"
              loading="lazy"
            />
          </a>
          <a id="owb-insta" href="https://www.instagram.com/oviedoweddingbarn" target="_blank">
            <img
              src="/images/Instagram_Glyph_Gradient_RGB.svg"
              alt="instagram Icon"
              class="w-10"
              loading="lazy"
            />
          </a>
        </div>
        <div class="md:my-auto">
          <ul>
            <li>
              (321) 368-4367
            </li>
            <li>info@oviedoweddingbarn.com</li>
            <li>346 E. Franklin St.</li>
            <li>Oviedo, FL 32765</li>
          </ul>
        </div>
      </section>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N36TNXG"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        >
        </iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </footer>
  );
}
