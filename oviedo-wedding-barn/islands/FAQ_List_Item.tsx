import { useState } from "preact/hooks";
import IconPlus from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/plus.tsx";
import IconMinus from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/minus.tsx";

interface myProps {
  question: string;
  annswer: string;
}
export default function FaqListItem({ question, answer }: myProps) {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div
        onClick={() => setHide(!hide)}
        class="uppercase z-40 p-1 flex justify-between border(gray-100 2) bg-wedding-barn-red text-white focus:border(gray-100 2) hover:(bg-white text-black border(gray-100 2))"
      >
        <span class={`my-auto px-3`}>{question}</span>
        {hide
          ? <IconPlus class={`w-9 h-9`} />
          : <IconMinus class="w-9 h-9" />}
      </div>
      <div
        class={`p-4  ${
          hide ? "hidden" : "block "
        } animate-appear z-10 `}
      >
        <ul>
          {answer.split(".").map((value) => {
            if (value) {
              return <li class={`list-disc`}>{value}</li>;
            }
          })}
        </ul>
      </div>
    </>
  );
}
