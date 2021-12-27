<template>
  <div class="flex justify-center">
    <div class="card-container bg-gray-900 border-solid border border-indigo-900 mt-8 rounded shadow-md opacity-90"
         :class="{'blur-lg': isBlurred}"
         @click="isBlurred = !isBlurred"
    >
      <img
        :src=imgSrc
        alt=""
        class="stage-image"
      />
      <div
        class="card-bottom-container flex flex-col items-center justify-center">
        <p class="text-center text-white-87 text-xl px-2 pt-3">{{ cardHeadline }}</p>
        <p class="font-thin text-center text-justify px-2 py-4 text-white-87">{{ cardText }}</p>
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
      //required: true,
      default: "https://www.test.de/file/image/55/44/db4542ec-53d8-4a33-a876-331d463627e5-web/5779659_Passwortmanager_t202002.jpg",
    },

    cardHeadline: {
      type: String,
      default: "Something went wrong.",
    },

    cardText: {
      type: String,
      default: "If you see this, i fucked up."
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
  width: 18rem;
//height: 12rem;
}

.card-bottom-container {
//height: 4rem;
}

.stage-image {
//width: 200px; //height:200px;
}
</style>
