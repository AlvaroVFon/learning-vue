<template>
  <article
    @click="handleClick(course.id)"
    class="bg-bgSecondary rounded-xl w-[285px] h-[414px] p-4 border border-muted hover:border-accent flex flex-col justify-between hover:scale-105 duration-300 cursor-pointer"
  >
    <div class="">
      <CourseCardHeader :course="course" />
      <div className="flex flex-col items-end gap-4">
        <RouterLink
          @click="(e) => e.stopPropagation()"
          to="/categories"
          className="border border-muted text-accentDarker p-1 rounded-md hover:text-accent hover:border-accent duration-300 hover:bg-bgTertiary"
        >
          #{{ course.category?.name }}
        </RouterLink>
        <img
          src="https://placehold.jp/42b883/ffffff/300x160.png"
          alt="Curso de React"
          className="rounded-xl"
        />
      </div>
    </div>
    <!-- <CourseCardButtons
      course="{course}"
      isPurchased="{isPurchased}"
      isLiked="{isLiked}"
    /> -->
  </article>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  import CourseCardHeader from './CourseCardHeader.vue'
  const router = useRouter()
  defineProps({
    course: {
      type: Object,
      required: true,
    },
  })
  const handleClick = (courseId) => {
    router.push({ name: 'course', params: { id: courseId } })
    console.log('clicked')
  }
</script>

<style scoped>
  img {
    width: 360px;
    height: 160px;
  }
</style>
