<template>
  <component>
    <h2 class="text-center text-2xl mt-6">Stage {{ stageNumber }}</h2>
    <Picture/>
  </component>
</template>

<script>
export default {
  name: "Stage",

  props: {
    stageNumber: {
      type: Number,
    },

    imgSrc: {
      type: String,
      default: "https://www.test.de/file/image/55/44/db4542ec-53d8-4a33-a876-331d463627e5-web/5779659_Passwortmanager_t202002.jpg",
    }
  }
}
</script>

<style scoped>

</style>
