<template>
  <div class="wrapper-container ma-0">
    <div class="headline-container">
      <h1 class="text-center text-4xl text-white-87 font-bold my-8">Coding Stages with Daniel </h1>
      <h2 class="text-center text-3xl text-white-87 my-6">Basically <i>this</i> is a journey through your bachelor
        thesis. (In Pictures) </h2>
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
             card-headline="You realize you've chosen the wrong JavaScript framework. "
             card-text="That face when you realize, Nuxt was kinda unneccessary. "/>

      <Stage stage-number="4"
             img-src="Stage_4.png"
             card-headline="Writing your first tests. "
             card-text='Questioning life choices.. What was I thinking.. '/>


      <Stage stage-number="5"
             img-src="Stage_5.png"
             card-headline="3 Tests failed.. "
             card-text="Wait what? "/>

      <Stage stage-number="6"
             img-src="Stage_6.png"
             card-headline="Resignation "
             card-text="Tests failed again not sure why."/>

      <Stage stage-number="7"
             img-src="Stage_7.png"
             card-headline="Handling Errors"
             card-text="What is this error message.."/>

      <Stage stage-number="8"
             img-src="Stage_8.png"
             card-headline="Built failed"
             card-text="Just like the previous one. You're not sure why.."/>

      <Stage stage-number="9"
             img-src="Stage_9.png"
             card-headline="WHY DID YOU FAIL?!"
             card-text="Debugging via console.logging almost everything."/>

      <Stage stage-number="10"
             img-src="Stage_10.png"
             card-headline="Final resignation"
             card-text="One week till deadline. You're taking a nap."/>

      <Stage stage-number="11"
             img-src="Stage_11.png"
             card-headline="Dead inside stage"
             card-text="You stopped caring about everything (even yourself). You just want to pass. You deleted tests that failed."/>

      <Stage stage-number="12"
             img-src="Stage_12.png"
             card-headline="Final build completed"
             card-text="Bachelor thesis completed."/>

      <h3 class="text-xl text-center text-indigo-900 mt-32 mb-16">Thank you for being part of my life. <3</h3>

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
