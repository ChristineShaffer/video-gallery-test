<template>
  <div>
    <h1>{{ this.Video }}</h1>
  </div>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const Video = params.Video;
      return { Video };
    }
  }
</script>

<style scoped>

</style>
