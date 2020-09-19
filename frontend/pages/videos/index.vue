<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col col-sm-12 col-md-4 p-1" v-for="video in videos" :key="video.id">
          <div class="video-card p-4">
            <nuxt-link :to="`/${video.video_id}`">
              <img src="~/static/img/video-cover.png" alt="Video Cover">
              <h1 class="title">{{ video.title }}</h1>
              <p>{{ video.description }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        videos: [
          {
            "id": 1,
            "title": "What It's Like To Work At AlgaeCal",
            "description": "Discover what it's like to work at AlgaeCal with this quick video!",
            "video_id": "m3ralniniq"
          },
          {
            "id": 2,
            "title": "Esther Mangini Testimonial",
            "category": "Testimonials",
            "description": "Esther's journey to healthier bones",
            "video_id": "ybyot0dm7q"
          },
          {
            "id": 3,
            "title": "Teresa Cucurull Testimonial",
            "description": "Teresa's journey to healthier bones",
            "video_id": "mhmv73k989"
          },
          {
            "id": 4,
            "title": "Perfect Pilates For Osteoporosis - Legwork",
            "description": "Bone Healthy Exercises!",
            "video_id": "3n5p02h26w"
          },
          {
            "id": 5,
            "title": "Perfect Pilates For Osteoporosis - Amazing Abs",
            "description": "Bone Healthy Exercises!",
            "video_id": "kkgeu7v2va"
          },
          {
            "id": 6,
            "title": "Lara's Homemade Granola",
            "description": "Bone Healthy Recipes",
            "video_id": "m6amjftj3w"
          },
          {
            "id": 7,
            "title": "Brazil Nut Pesto",
            "description": "Bone Healthy Recipes",
            "video_id": "ajoe5d0jk0"
          }
        ]
      };
    },

    async asyncData({ $axios }) {
      try {
        // TODO: Figure out why video endpoint throwing error then move video load here
        // const data = await $axios.get("http://localhost:8080/videos");
      } catch (error) {
        console.log(error);
      }
      return {};
    }
  };
</script>

<style scoped>
  a {
    text-decoration: none;
    color: var(--algaecal-green);
  }

  a:hover {
    text-decoration: none;
  }

  .container {
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
  }

  .video-card {
    border: 1px solid grey;
    height: 100%;
  }

  .video-card img {
    max-width: 100%;
  }

  .title {
    font-size: 1.5em;
    margin-top: 1em;
    font-weight: bold;
  }
</style>
