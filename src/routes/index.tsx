import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik"
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <header class="px-12 py-4 text-[24px] text-center lg:text-start">
        <h1>VCRISTIANMS</h1>
      </header>
      <section class="px-12 h-screen flex justify-center items-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-4">
          <div class="flex flex-col gap-4 items-center lg:items-start flex-wrap">
            <div class="w-[286px] lg:w-[496px] text-[23px] lg:text-[46px] text-center lg:text-start font-medium ">
              Hola, soy Cristian un DESARROLLADOR WEB
            </div>
            <p class="w-[286px] lg:w-[496px] text-[12px] lg:text-[24px] text-center lg:text-start font-light">Con 2 años de experiencia, transformando ideas en soluciones con código. !Bienvenido a mi mundo de desarrollo!</p>
            <div>
              <button type="button" class="py-2 px-4 hover:bg-blue-600 bg-blue-500 rounded-md text-white text-[12px]">CONTACT</button>
            </div>
          </div>
          <div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/vcristianms-a3f22.appspot.com/o/undraw_programming_re_kg9v.svg?alt=media&token=98da5271-3a13-426d-9874-a60a89c23ddc" width="732" height="539" layout="constranined" />
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
