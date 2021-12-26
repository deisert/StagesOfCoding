<template>
  <div class="wrapper-container ma-0">
    <div class="flex justify-center">
      <h1 class="text-4xl text-white-87 my-8">Coding Stages with Daniel </h1>
    </div>

    <div>
      <!--V-for every stage in stages -->
      <Stage stage-number="1"
             bottom-text="debugging the console"/>
      <Stage stage-number="2"
             bottom-text="Finding an Error"/>
      <Stage stage-number="3"
             bottom-text="Debugging the Error"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "coding-journey"
}
</script>

<style scoped>

</style>
