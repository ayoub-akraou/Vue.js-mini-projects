<template>
  <header class="px-6 py-4 bg-primary">
    <nav class="container mx-auto flex items-center">
      <h1 class="text-[clamp(2rem,2rem+2vw,4.5rem)] font-medium text-white mr-auto">Find a Coach</h1>
      <SquaredButton theme="rounded">test</SquaredButton>
    </nav>
  </header>
</template>

<script>
import SquaredButton from "../UI/SquaredButton.vue";
export default {
components: {
  SquaredButton
},
methods: {
  showAllCoaches() {
    
  }
}
}
</script>

<style>

</style>