<template>
  <div class="wrapper-container ma-0">
    <div class="headline-container">
      <h1 class="text-center text-4xl text-white-87 font-bold my-8">Coding Stages with Daniel </h1>
      <h2 class="text-center text-3xl text-white-87 my-6">Basically <i>this</i> is a journey through your bachelor
        thesis. </h2>
      <h4 class="text-white-87 font-thin text-center mb-8">Click on the images to take a look</h4>
    </div>

    <div>
      <!--V-for every stage in stages -->
      <Stage stage-number="1"
             card-headline="Starting a new project"
             card-text="Higly motivated. As usual when you start something new. "
             img-src="Stage_1.png"/>

      <Stage stage-number="2"
             img-src="Stage_2.png"
             card-headline="Deep Work Face"
             card-text="There are times when you are just one with your code. "/>

      <Stage stage-number="3"
             img-src="Stage_3.png"
             card-headline="You realize you've chosen the wrong javascript framework. "
             card-text="That face when you realize, Nuxt was kinda unneccessary. "/>

      <Stage stage-number="4"
             img-src="Stage_4.png"
             card-headline="Writing your first tests. "
             card-text="Questioning life choices.. "/>

      <Stage stage-number="5"
             img-src="Stage_5.png"
             card-headline="3 Tests failed. "
             card-text="Wait what? "/>

    </div>
  </div>
</template>

<script>

export default {
  name: "coding-journey",
}
</script>

<style scoped>

</style>
