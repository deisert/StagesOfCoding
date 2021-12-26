<template>
  <div class="mb-8">
    <h2 class="text-center text-white-87 text-2xl">Stage {{ stageNumber }}</h2>
    <StageCard :bottom-text='bottomText'/>
  </div>
</template>

<script>
export default {
  name: "Stage",

  props: {
    stageNumber: {
      type: String,
    },

    imgSrc: {
      type: String,
      default: "https://www.test.de/file/image/55/44/db4542ec-53d8-4a33-a876-331d463627e5-web/5779659_Passwortmanager_t202002.jpg",
    },

    bottomText: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
