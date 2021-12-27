<template>
  <div class="mb-8">
    <h2 class="text-center text-white-87 text-2xl">Stage {{ stageNumber }}</h2>
    <StageCard :card-headline='cardHeadline' :card-text='cardText' :img-src='imgSrc'/>
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
      //required: true,
      //default: "https://www.test.de/file/image/55/44/db4542ec-53d8-4a33-a876-331d463627e5-web/5779659_Passwortmanager_t202002.jpg",
    },

    cardHeadline: {
      type: String,
    },

    cardText: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
