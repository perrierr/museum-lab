<template>
  <div class="home">
    <section class="image-gallery">
      <div class="image" v-for="item in items" :key="item.id">
        <h1>{{ item.title }}</h1>
        <h2>{{ item.description }}</h2>
        <img :src="item.path" />
      </div>
    </section>
    <div class="footer-item">
      <a
        id="link-footer-1"
        href="https://github.com/perrierr/museum-lab.git"
      >
        <h1>Source</h1>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.image h2 {
  font-style: italic;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}

.footer-item > #link-footer-1 {
  display: flex;
  padding-left: 5px;
  margin-top: 50px;
  justify-content: center;
  color: black;
  /*border: solid 2px purple;*/
}

.footer-item > #link-footer-1:hover {
  animation: shake 2s;
  animation-iteration-count: 2;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }

  50% {
    transform: translate(-1px, -1px) rotate(16deg);
  }

  100% {
    transform: translate(1px, 1px) rotate(-12deg);
  }
}
</style>
