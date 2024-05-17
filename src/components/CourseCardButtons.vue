<template>
  <div class="flex justify-evenly">
    <button>
      <CommentIcon />
    </button>
    <button>
      <UpvoteIcon />
    </button>
    <button>
      <LinkIcon />
    </button>
    <button>
      <CreditCardIcon />
    </button>
  </div>
</template>
<script setup>
  import CommentIcon from './icons/CommentIcon.vue'
  import LinkIcon from './icons/LinkIcon.vue'
  import CreditCardIcon from './icons/CreditCardIcon.vue'
  import UpvoteIcon from './icons/UpvoteIcon.vue'
</script>

<style scoped></style>
