<template>
  <div>
    <article
      id="movieCard"
      class="movieCard"
      v-for="edge in $static.allMovie.edges"
      :key="edge.node.id"
    >
      <g-image
      class="poster"
      :src="edge.node.poster"
      style="width: 100%"
      />
      <div class="movieCard__content">
        <ul class="movieCard__details">
          <li class="movieCard__details-item">{{ edge.node.genre }}</li>
          <li class="movieCard__details-item">
            {{ edge.node.duration }}
          </li>
          <li class="movieCard__details-item">
            {{ edge.node.public }}
          </li>
        </ul>
        <div class="movieCard__cta">
          <button class="btn btn-more">
            <g-link :to="edge.node.path"><i class="fas fa-plus-circle"></i></g-link>
          </button>
          <button
            class=" snipcart-add-item btn btn-buy"
            :data-item-id="edge.node.id"
            :data-item-price="7.5"
            data-item-url="/"
            :data-item-description="edge.node.excerpt"
            :data-item-image="edge.node.poster"
            :data-item-name="edge.node.title"
          >
            Résa
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "MovieCard"
};
</script>

<style lang="scss" scoped>
.movieCard {
  max-width: 15em;
  min-height: fit-content;
  border-radius: 5px;
  padding: 1em;
  background: #4b4453;
  justify-self: center;
}

.movieCard__poster {
  width: 100%;
}

.movieCard__details {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
  font-size: 0.75em;

  &__item {
    color: #e2e8f0;
    background: #4a5568;
    padding: 0.25em;
    border-radius: 4px;
  }
}

.movieCard__cta {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em 0 0.5em 0;

  .btn {
    font-weight: 500;
    padding: 0.4em 0.6em;
    border-radius: 5px;
    width: 5em;
    margin: 0 0.25em;
  }
}

i {
  font-size: 2rem;
}

.btn-more {
  background-color: #ecc94b;
}

.btn-buy {
  background-color: #c34a36;
}

// Media queries

@media (min-width: 779px) {
  #aside {
    display: block;
  }
}
</style>