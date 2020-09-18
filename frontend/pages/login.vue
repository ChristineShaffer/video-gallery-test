<template>
  <div class="container">
    <div>
      <b-card class="login-card">
        <h1 class="title">User Login</h1>

        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Your Email Address"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="button--green" id="login-button">Login</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: ''
      },
    };
  },
  methods: {
    onSubmit(){
      console.log('A form was submitted');
    },
  }
}
</script>

<style>
  body {
    background-color: var(--algaecal-green);
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .login-card {
    padding: 2em;
  }

  #login-button {
    margin-top: 2em;
  }
</style>
