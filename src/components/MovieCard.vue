<template>
  <div>
    <article
      class="movieCard"
      v-for="edge in $static.allMovie.edges"
      :key="edge.node.id"
    >
      <!-- <g-image
      class="poster"
      alt="{{
      edge.node.title
      }}"
      :src="edge.node.poster"
      style="max-width: 25%"
      /> -->
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
            <g-link :to="edge.node.path">+ d'infos</g-link>
          </button>
          <button class="btn btn-play">BA</button>
          <button class="btn btn-buy">Résa</button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
};
</script>

<style lang="scss" scoped>
.movieCard {
  max-width: 15em;
  min-height: fit-content;
  border-radius: 5px;
  padding: 1em;
  background: #2d3748;
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
    padding: 0.5em 0.75em;
    border-radius: 5px;
  }
}

.btn-more {
  background-color: #ecc94b;
}
.btn-play {
  background-color: #ed8936;
}

.btn-buy {
  background-color: #e53e3e;
}
</style>
