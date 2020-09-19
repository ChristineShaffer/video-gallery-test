<template>
  <b-card class="login-card">
    <h1 class="title">User Login</h1>

    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          minlength="3"
          required
          placeholder="Enter Your Username"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" :disabled="form.username.length < 3" class="button--green" id="login-button">
        Login
      </b-button>
      <p id="error-message" v-show="form.error">Sorry, that username is not found.</p>
    </b-form>
  </b-card>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: "",
          error: false
        }
      };
    },
    methods: {
      async onSubmit(event){
        event.preventDefault();

        try {
          await this.$store.dispatch("authenticate", { username: this.form.username });
          this.$router.push("/videos");
        } catch (error) {
          // User didn't exist or something went wrong
          this.form.error = true;
        }
      }
    }
  }
</script>

<style>
  #error-message {
    color: red;
    margin-top: 2em;
  }

  #login-button {
    margin-top: 2em;
  }

  .login-card {
    padding: 2em;
  }

  .title {
    font-family:
      "Quicksand",
      "Source Sans Pro",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      sans-serif;
    display: block;
    font-weight: bold;
    font-size: 2em;
    color: #3b8070;
    letter-spacing: 1px;
    padding: 1em;
  }
</style>
