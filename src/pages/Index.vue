<template>
  <Layout>
    <Header />
    <div class="container">
      <main id="main">
        <section id="now" class="movieCards">
          <h2 class="section__title">À l'affiche</h2>
          <div class="movieCards__list">
            <MovieCard />
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
        </section>
        <section class="soon">
          <h2 class="sectionTitle">Prochainement</h2>
        </section>
      </main>
      <!-- End of Main -->

      <!-- Aside -->
      <aside id="aside">
        <Sidebar />
      </aside>
    </div>
  </Layout>
</template>
<static-query>
  {
    allMovie{
    edges{
      node{
        id
        path
        title
        director
        actors
        poster
        trailer
        excerpt
        genre
        date(format: "Do MMMM, YYYY")
        duration
        public
      }
    }
  }
}
</static-query>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import MovieCard from "@/components/MovieCard.vue";
export default {
  metaInfo: {
    title: "LeKino",
    meta: [
      { charset: "utf-8" },
      { name: "description", content: "Un cinéma à taille humaine" },
      { name: "keywords", content: "Films, festivals, rencontres" }
    ]
  },
  components: {
    Header,
    Sidebar,
    MovieCard
  }
};
</script>

<style lang="scss">
.home-links a {
  margin-right: 1em;
}

.container {
  display: flex;
  justify-content: space-between;
}

#main {
  width: 100%;
  padding: 1rem;
}

.movieCards__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 1.5em;
}

#aside {
  background-color: blue;
  width: 33%;
  max-width: 400px;
  min-width: 200px;
  padding: 1rem;
  display: none;
}

// movieCard

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
