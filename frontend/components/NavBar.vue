<template>
  <b-navbar toggleable="lg" type="dark" id="main-nav-bar">
    <b-navbar-brand href="#">
      <img src="https://cdn.algaecal.com/wp-content/themes/algaecal/img/logo-2020.svg" alt="AlgaeCal Logo"
           id="algaecal-logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Videos</b-nav-item>
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
  #algaecal-logo {
    width: 5em;
    height: auto;
  }
  #main-nav-bar {
    background-color: #fff;
    padding-left: 10em;
    padding-right: 10em;
  }
  #main-nav-bar a {
    color: var(--algaecal-green);
  }
</style>
