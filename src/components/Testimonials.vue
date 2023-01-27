<template>
   <section class="flex flex-col items-center text-center">
      <img
         class="rounded-full"
         width="72"
         height="72"
         :src="props.item.pic"
         :alt="props.item.name"
      />
      <p
         class="mt-8 max-w-[327px] font-barlow text-f18 font-semibold leading-[32px] tracking-[-0.13px] text-[#5B636D] md:mt-[58px] md:min-w-0 md:max-w-[350px]"
      >
         {{ props.item.txt }}
      </p>
      <p
         class="mt-8 font-fraunces text-f18 font-black leading-[22px] text-[#24303E] md:mt-[69px]"
      >
         {{ props.item.name }}
      </p>
      <p
         class="mt-2 font-barlow text-f14 font-semibold leading-[25px] text-[#A7AAAD]"
      >
         {{ props.item.job }}
      </p>
   </section>
</template>

<script setup>
   const props = defineProps(["item"])
</script>

<style scoped></style>
