<template>
  <div class="flex justify-center">
    <div class="card-container bg-gray-800 border-solid border border-gray-700 mt-8 rounded shadow-md"
         :class="{blur: isBlurred}"
         @click="isBlurred = !isBlurred"
    >
      <img
        :src="imgSrc"
        alt=""
        class="stage-image"
      />
      <div
        class="card-bottom-container h-16 flex items-center justify-center text-white-87 text-lg font-light">
        <span class="text-white-87">{{ bottomText }}</span>
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: "StageCard",

  props: {
    imgSrc: {
      type: String,
      default: "https://www.test.de/file/image/55/44/db4542ec-53d8-4a33-a876-331d463627e5-web/5779659_Passwortmanager_t202002.jpg",
    },

    bottomText: {
      type: String,
      default: "Da ist was schiefgelaufen",
    }
  },

  data: function () {
    let isBlurred = true;

    return {
      isBlurred
    }

  },

}
</script>

<style scoped>

.card-container {
  width: 13rem;
//height: 12rem;
}

.card-bottom-container {
//height: 4rem;
}

.stage-image {
//width: 200px; //height:200px;
}
</style>
