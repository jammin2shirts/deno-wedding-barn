import { Head } from "$fresh/runtime.ts";
import NavBar from "@/islands/NavBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oviedo Wedding Barn | Packages</title>
      </Head>
      <NavBar selected={2}/>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
      </div>
    </>
  );
}
