<template>
  <div class="flex justify-center">
    <div class="card-container bg-gray-900 border-solid border border-indigo-900 mt-8 rounded shadow-md"
         :class="{blur: isBlurred}"
         @click="isBlurred = !isBlurred"
    >
      <img
        :src="imgSrc"
        alt=""
        class="stage-image"
      />
      <div
        class="card-bottom-container flex flex-col items-center justify-center">
        <p class="text-white-87 pt-2">{{ bottomText }}</p>
        <p class="font-thin text-center text-justify px-2 py-2 text-white-87">Hallo ich bin ein test span ich will
          schauen was passiert wenn ich viel platz einnehme</p>
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
    //TODO: isBlurred needs to be true, just for testing purposes
    let isBlurred = false;

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
