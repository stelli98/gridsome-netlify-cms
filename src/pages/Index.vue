<template>
  <Layout>
    <h1>LeKino</h1>
    <h2>Awesome catchphrase!</h2>
    <div class="container">
      <main id="main">
        <section id="now" class="section">
          <h2 class="section__title">À l'affiche</h2>
          <article class="movieCards">
            <ul class="movieCards__list">
              <li class="movieCards__list-item">
                <article class="movieCard">
                  <img
                    src="https://media.senscritique.com/media/000018573383/source_big/Parasite.jpg"
                    alt="movie title"
                    class="movieCard__poster"
                  />
                  <div class="movieCard__content">
                    <ul class="movieCard__details">
                      <li class="movieCard__details-item">-12</li>
                      <li class="movieCard__details-item">2h49</li>
                      <li class="movieCard__details-item">Comedy, Drama</li>
                    </ul>
                    <div class="movieCard__cta">
                      <button class="btn btn-more">+ d'infos</button>
                      <button class="btn btn-play">BA</button>
                      <button class="btn btn-buy">Résa</button>
                    </div>
                  </div>
                </article>
              </li>
              <li class="movieCards__list-item">
                <article class="movieCard">
                  <img
                    src="https://media.senscritique.com/media/000018573383/source_big/Parasite.jpg"
                    alt="movie title"
                    class="movieCard__poster"
                  />
                  <div class="movieCard__content">
                    <ul class="movieCard__details">
                      <li class="movieCard__details-item">-12</li>
                      <li class="movieCard__details-item">2h49</li>
                      <li class="movieCard__details-item">Comedy, Drama</li>
                    </ul>
                    <div class="movieCard__cta">
                      <button class="btn btn-more">+ d'infos</button>
                      <button class="btn btn-play">BA</button>
                      <button class="btn btn-buy">Résa</button>
                    </div>
                  </div>
                </article>
              </li>
              <li class="movieCards__list-item">
                <article class="movieCard">
                  <img
                    src="https://media.senscritique.com/media/000018573383/source_big/Parasite.jpg"
                    alt="movie title"
                    class="movieCard__poster"
                  />
                  <div class="movieCard__content">
                    <ul class="movieCard__details">
                      <li class="movieCard__details-item">-12</li>
                      <li class="movieCard__details-item">2h49</li>
                      <li class="movieCard__details-item">Comedy, Drama</li>
                    </ul>
                    <div class="movieCard__cta">
                      <button class="btn btn-more">+ d'infos</button>
                      <button class="btn btn-play">BA</button>
                      <button class="btn btn-buy">Résa</button>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </article>
        </section>
        <section class="soon">
          <h2 class="sectionTitle">Prochainement</h2>
        </section>
      </main>
      <!-- End of Main -->

      <!-- Aside -->
      <aside id="aside">
        <h2>aside will be nice</h2>
      </aside>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "LeKino",
    meta: [
      { charset: "utf-8" },
      { name: "description", content: "Un cinéma à taille humaine" },
      { name: "keywords", content: "Films, festivals, rencontres" },
    ],
  },
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
  background-color: pink;
  width: 100%;
}

.movieCards__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 1.5em;
}

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

#aside {
  background-color: blue;
  width: 33%;
  max-width: 400px;
  min-width: 200px;
}
</style>
