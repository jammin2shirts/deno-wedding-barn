import FaqListItem from "@/islands/FAQ_List_Item.tsx";

export default function Faq(ctx: PageProps) {
  return (
    <div class={`w-4/5 flex flex-col gap-3 font-canada-type-gibson uppercase`}>
      <div class={`flex justify-center my-10`}>
        <iframe
          width="600"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAhQUPa-3BMq0YMJioEz7D93LhuH3vv_Io
        &q=OVIEDO+WEDDING+BARN&zoom=12"
        >
        </iframe>
      </div>
      <span class={`text-center font-ambroise-std text-2xl`}>
        FAQs
      </span>
      <FaqListItem
        question="What is the capacity?"
        answer="We can comfortably seat up to 200 guests with a band stage and dance floor."
      />
      <FaqListItem
        question="Is The Wedding Barn climate controlled?"
        answer="Yes, we are fully insulated and temperature controlled with AC and
        heat."
      />
      <FaqListItem
        question="Are there bathrooms on site?"
        answer="Yes, we are a commercially designed venue with multiple bathrooms
        available."
      />
      <FaqListItem
        question="Are you wheelchair friendly?"
        answer="Yes, we are ADA compliant and even took it a step further to add a
        ramp down to the ceremony area. All event space is on the first floor and has easy access."
      />
      <FaqListItem
        question="Can we take engagement photos at the venue?"
        answer=" Yes, all of our wedding packages include the option to schedule an
        onsite photo session."
      />
      <FaqListItem
        question="How early can we arrive to get ready?"
        answer=" The dressing suites will be open 2 hours before the ceremony time.
        There may be flexibility for earlier if there are no morning events
        that day."
      />
      <FaqListItem
        question="Do you have staff onsite during the event?"
        answer="We will have a dedicated venue manager on site from start to finish as
        well as a setup and breakdown crew to help with the tables, chairs,
        and ongoing cleanliness of the venue."
      />
      <FaqListItem
        question="Is The Wedding Barn zoned properly and allowed to operate as a venue?"
        answer=" We are aware there are a lot of barn venues operating without the
        correct commercial zoning that are at risk of shutting down. Rest
        assured, we are zoned properly and approved by the city for operating
        as a venue."
      />
      <FaqListItem
        question="What are the closest airports?"
        answer=" Sanford International Airport, SFB, is a short 15min drive across the
        bridge. Orlando International Airport, MCO, is about a 30min drive"
      />
      <FaqListItem
        question="How do we save the date?"
        answer="We require a $2000 retainer to save the date."
      />

      <FaqListItem
        question="What are the house rules?"
        answer=" We are a wooden barn so open flames are not permitted. We do allow
        sparkler exits with management approval.
        Nothing may be affixed to any wall, wood, furniture, or painted
        surface by using putty, wire, tacks, staples, tape, or any material
        that will harm the finish.
        Helium balloons, glitter, rice, and outdoor confetti are not
        permitted.
        Smoking is only allowed in the designated smoking area outsite on
        the patio."
      />
    </div>
  );
}
