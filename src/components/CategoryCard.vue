<template>
  <article
    class="bg-bgSecondary rounded-xl w-[285px] h-[414px] p-4 border border-muted hover:border-accent flex flex-col justify-between hover:scale-105 duration-300 cursor-pointer"
  >
    <h1 class="text-primary text-2xl font-bold h-20">{{ categorie.name }}</h1>
    <img
      src="https://placehold.jp/42b883/ffffff/300x160.png"
      alt="category image"
      class="rounded-xl"
    />
    <p class="text-accentDarker h-32">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iusto
      quibusdam id, dicta et tempora reprehenderit sapiente iure quis ex.
    </p>
  </article>
</template>
<script setup>
  defineProps({
    categorie: {
      type: Object,
      required: true,
    },
  })
</script>
