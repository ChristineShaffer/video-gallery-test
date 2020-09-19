<template>
  <div>
    <NavBar />

    <Nuxt />
  </div>
</template>

<script>
  export default {
    middleware: "authenticated",
  }
</script>

<style>
  /*
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
  */
</style>
