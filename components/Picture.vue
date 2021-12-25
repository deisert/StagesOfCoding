<template>
  <div class="flex justify-center">
    <div class="picture-wrapper border-solid border-2 border-black mt-8"
         :class="{blur: isBlurred}"
         @click="isBlurred = !isBlurred"
    >
      <img
        src="https://www.test.de/file/image/55/44/db4542ec-53d8-4a33-a876-331d463627e5-web/5779659_Passwortmanager_t202002.jpg"
        alt=""
        class="picture-test mb-6"
      />

    </div>
  </div>


</template>

<script>
export default {
  name: "Pictures",

  data: function () {
    let isBlurred = true;

    return {
      isBlurred
    }

  },

}
</script>

<style scoped>

.picture-wrapper {
  width: 200px;
  height: 200px;
}

.picture-test {
//width: 200px; //height:200px;
}
</style>
