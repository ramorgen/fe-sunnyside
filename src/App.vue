<template>
   <header class="relative">
      <section class="relative w-full min-w-[360px]">
         <h1 class="">We are creatives</h1>
         <picture>
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-header.jpg"
            />
            <img
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-header.jpg"
               alt="hero"
            />
         </picture>

         <!-- Arrow down -->
         <section
            class="absolute top-[54.6%] flex w-full flex-row justify-center md:top-[45%]"
         >
            <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
               <g
                  stroke="#FFF"
                  stroke-width="6"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               >
                  <path d="M18 3v100M3 95.484l15 15 15-15" />
               </g>
            </svg>
         </section>
         <!-- Menu -->
         <section
            class="_menu absolute top-[32px] ml-6 flex h-6 w-full items-center justify-between md:top-[34px] md:ml-10 md:h-[56px]"
         >
            <!-- Logo -->
            <svg width="124" height="24" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z"
                  fill="#FFF"
                  fill-rule="nonzero"
               />
            </svg>
            <!-- Menu moblie -->
            <div
               @click="hbgClicked()"
               v-if="store.wWidth < 768"
               class="cursor-pointer"
            >
               <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                     fill="#FFF"
                     fill-rule="evenodd"
                  />
               </svg>
               <div
                  class="mobileMenu absolute right-0 top-[58px] w-[329px] bg-white transition-all"
                  :class="menuClass"
               >
                  <ul
                     class="mt-20 flex flex-col items-center justify-center gap-5 font-barlow text-f20 font-semibold tracking-[0.14px] text-[#808397]"
                  >
                     <li>About</li>
                     <li>Services</li>
                     <li>Projects</li>
                     <li
                        class="rounded-[28px] bg-[#FBD600] pt-4 pb-[15px] pl-8 pr-[30px] font-fraunces text-f15 font-bold uppercase tracking-[-.11px] text-[#24303E]"
                     >
                        Contact
                     </li>
                  </ul>
               </div>
            </div>
            <!-- Menu desktop -->
            <div v-else>
               <ul
                  class="mr-12 flex flex-row items-center space-x-[47px] leading-[25px] tracking-[-0.13px] text-white"
               >
                  <li>About</li>
                  <li>Services</li>
                  <li>Projects</li>
                  <li
                     class="cursor-pointer rounded-[28px] bg-white pt-4 pb-[15px] pl-8 pr-[30px] font-fraunces font-bold uppercase tracking-[-.11px] text-[#24303E] mix-blend-normal hover:opacity-25"
                  >
                     Contact
                  </li>
               </ul>
            </div>
         </section>
      </section>
   </header>

   <main>
      <section class="flex flex-col-reverse md:flex-row">
         <div class="grid w-full place-content-center">
            <div
               class="mx-auto mt-[64px] mb-[64px] w-[88%] text-center md:w-[90%] md:text-start lg:w-[62%]"
            >
               <h2 class="mb-8">Transform your brand</h2>
               <p class="textbox1">
                  We are a full-service creative agency specializing in helping
                  brands grow fast. Engage your clients through compelling
                  visuals that do most of the marketing for you.
               </p>
               <a href="#" class="learn learn1">learn more</a>
            </div>
         </div>
         <picture class="w-full">
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-transform.jpg"
            />
            <img
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-transform.jpg"
               alt="An egg"
            />
         </picture>
      </section>
      <section class="flex flex-col md:flex-row">
         <picture class="w-full">
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-stand-out.jpg"
            />
            <img
               loading="lazy"
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-stand-out.jpg"
               alt="No clue"
            />
         </picture>
         <div class="grid w-full place-content-center">
            <div
               class="mx-auto mt-[64px] mb-[64px] w-[88%] text-center md:w-[90%] md:text-start lg:w-[62%]"
            >
               <h2 class="mb-8">Stand out to the right audience</h2>
               <p class="textbox1">
                  Using a collaborative formula of designers, researchers,
                  photographers, videographers, and copywriters, we’ll build and
                  extend your brand in digital places.
               </p>
               <a href="#" class="learn learn2">learn more</a>
            </div>
         </div>
      </section>
      <section class="flex flex-col md:flex-row">
         <div class="relative w-full">
            <picture class="">
               <source
                  media="(min-width: 768px)"
                  srcset="/src/assets/images/desktop/image-graphic-design.jpg"
               />
               <img
                  loading="lazy"
                  class="h-full w-full object-cover object-center"
                  src="/src/assets/images/mobile/image-graphic-design.jpg"
                  alt="Two red cherries"
               />
            </picture>
            <div
               class="absolute left-[5%] right-[5%] bottom-[5%] text-center lg:bottom-[10%] lg:left-[26%] lg:right-[26%]"
            >
               <h3>Graphic design</h3>
               <p class="textbox2 mt-[27px]">
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
               </p>
            </div>
         </div>
         <div class="relative w-full">
            <picture class="">
               <source
                  media="(min-width: 768px)"
                  srcset="/src/assets/images/desktop/image-photography.jpg"
               />
               <img
                  loading="lazy"
                  class="h-full w-full object-cover object-center"
                  src="/src/assets/images/mobile/image-photography.jpg"
                  alt="An orange"
               />
            </picture>
            <div
               class="absolute left-[5%] right-[5%] bottom-[5%] text-center lg:bottom-[10%] lg:left-[26%] lg:right-[26%]"
            >
               <h3>Photography</h3>
               <p class="textbox2 mt-[27px]">
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
               </p>
            </div>
         </div>
      </section>
      <section>
         <p
            class="font-balck mt-14 text-center font-fraunces text-f14 uppercase tracking-[4px] text-[#A7AAAD] md:mt-[10rem] md:text-f20 md:tracking-[5px]"
         >
            Client Testimonials
         </p>
         <div
            class="mx-auto mt-[84px] flex w-fit flex-col gap-[64px] md:mt-[81px] md:flex-row md:gap-[30px]"
         >
            <Testimonials
               v-for="item in store.testimonials"
               :key="item.name"
               :item="item"
            >
            </Testimonials>
         </div>
      </section>
      <section class="mt-[86px] grid grid-cols-2 md:mt-[160px] md:grid-cols-4">
         <picture>
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-gallery-milkbottles.jpg"
            />
            <img
               loading="lazy"
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-gallery-milkbottles.jpg"
               alt="Milkbottles"
            />
         </picture>
         <picture>
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-gallery-orange.jpg"
            />
            <img
               loading="lazy"
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-gallery-orange.jpg"
               alt="Half orange"
            />
         </picture>
         <picture>
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-gallery-cone.jpg"
            />
            <img
               loading="lazy"
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-gallery-cone.jpg"
               alt="Empty cone"
            />
         </picture>
         <picture>
            <source
               media="(min-width: 768px)"
               srcset="/src/assets/images/desktop/image-gallery-sugarcubes.jpg"
            />
            <img
               loading="lazy"
               class="h-full w-full object-cover object-center"
               src="/src/assets/images/mobile/image-gallery-sugar-cubes.jpg"
               alt="Some sugar-cubes"
            />
         </picture>
      </section>
      <footer class="flex flex-col items-center bg-[#90D4C6]">
         <img class="pt-[72px]" src="/src/assets/images/logo.svg" alt="" />
         <ul
            class="mt-10 flex cursor-pointer flex-row text-f18 font-semibold text-[#458D7E]"
         >
            <li class="hover:text-white">About</li>
            <li class="ml-[57px] hover:text-white">Services</li>
            <li class="ml-[57px] hover:text-white">Projects</li>
         </ul>
         <ul class="mt-12 mb-[72px] flex flex-row text-[#2C7566]">
            <li>
               <svg
                  class="h-6 w-6 cursor-pointer hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
               >
                  <path
                     d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                     stroke="currentColor"
                     fill="currentColor"
                  />
               </svg>
            </li>
            <li>
               <svg
                  class="ml-7 h-6 w-6 cursor-pointer hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
               >
                  <path
                     d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                     stroke="currentColor"
                     fill="currentColor"
                  />
               </svg>
            </li>
            <li>
               <svg
                  class="ml-7 h-6 w-6 cursor-pointer hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
               >
                  <path
                     d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                     stroke="currentColor"
                     fill="currentColor"
                  />
               </svg>
            </li>
            <li>
               <svg
                  class="ml-7 h-6 w-6 cursor-pointer hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
               >
                  <path
                     d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z"
                     stroke="currentColor"
                     fill="currentColor"
                  />
               </svg>
            </li>
         </ul>
      </footer>
   </main>
</template>

<script setup>
   import store from "./store.js"

   let menuClass = ref("h-0")

   const hbgClicked = () => {
      menuClass.value = menuClass.value === "h-0" ? "h-[329px]" : "h-0"
   }
</script>

<style scoped>
   ._menu {
      width: calc(100% - 48px);
   }

   @media screen and (min-width: 768px) {
      ._menu {
         width: calc(100% - 88px);
      }
   }

   .mobileMenu {
      clip-path: polygon(0% 11%, 87% 11%, 97% 3%, 97% 97%, 0% 98%);
   }

   .textbox1 {
      @apply text-f18 font-semibold leading-[30px] tracking-[-0.13px] text-[#808397];
   }
   .textbox2 {
      @apply text-f16 font-semibold leading-[27px] tracking-[-0.11px] text-[#24554A];
   }

   .learn {
      @apply relative z-[1] mt-8 inline-block  font-fraunces text-f15 uppercase leading-6 tracking-[1px] text-[#24303E] md:mt-10;
   }
   .learn::after {
      content: "";
      position: absolute;
      /* background-color: #fad400; */
      width: 110%;
      height: 10px;
      left: -5%;
      top: 50%;
      z-index: -1;
      border-radius: 28px;
      opacity: 0.25;
      transition: all 500ms;
   }
   .learn:hover::after {
      opacity: 1;
   }

   .learn1::after {
      background-color: #fad400;
   }

   .learn2::after {
      background-color: #fe7766;
   }

   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
</style>
