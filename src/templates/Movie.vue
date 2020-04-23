<template>
  <div>
    <g-link class="nav__link" to="/">Retour</g-link>
    <div class="container">
      <div class="wrapper">
        <div class="main">
          <div class="top">
            <div class="posterContainer">
              <g-image class="poster" :src="$page.movie.poster" />
            </div>

            <div class="info">
              <h2 class="movieTitle">{{ $page.movie.title }}</h2>
              <div class="details">
                <p class="details__detail">{{ $page.movie.genre }}</p>
                <p class="details__detail">{{ $page.movie.duration }}</p>
                <p class="details__detail">{{ $page.movie.public }}</p>
              </div>
              <div class="crew">
                <p class="director">
                  <strong>un film de: </strong>{{ $page.movie.director }}
                </p>
                <p class="actors">
                  <strong>Avec: </strong>{{ $page.movie.actors }}
                </p>
                <p class="releaseDate">
                  <strong>Sortie en salle: </strong>{{ $page.movie.date }}
                </p>
              </div>
              <tabs>
                <tab name="Synopsis" selected="true">
                <div class="excerpt">
                  <h3>Le synopsis</h3>
                  {{ $page.movie.excerpt }}
                </div>
              </tab>
              <tab name="Horaires">
                <div class="timetable">
                  <h3>Les séances</h3>
                  
                </div>
              </tab>
              </tabs>
            </div>
          </div>
          <div class="bottom">
            <div style="width: 100%; margin: 0 auto;">
              <div
                style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;"
              >
                <iframe
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                  :src="$page.movie.trailer"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Main -->
        <aside id="aside">
          aside will be there
        </aside>
        <!-- End of Aside -->
      </div>
    </div>
  </div>
</template>
<page-query>
query ($path :String!) {
  movie(path: $path){
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
    content
  }
}
</page-query>
<script>
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  components: {
    Tab,
    Tabs
  }
};
</script>

<style lang="scss" scoped>
.banner {
  background-color: aqua;
}

.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 1em;
}

.main {
  width: 100%;
  padding: 1rem;
}

.top {
  padding-bottom: 5%;
  .posterContainer {
    max-width: 100vw;
    .poster {
      width: 100%;
      border-radius: 25px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 100%;

    .movieTitle {
      text-align: center;
    }
  }
  .details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &__detail {
      font-size: 0.75rem;
      border-radius: 50px;
      background-color: #ff8066;
      padding: 0.75em;
    }
  }
}
.bottom {
  background-color: greenyellow;
  .excerpt {
    background-color: blueviolet;
  }
  .timetable {
    background-color: crimson;
    height: 3em;
  }
}

#aside {
  display: none;
}

// Media queries
@media (min-width: 648px) {
  .info {
    padding-left: 0 1em;
  }

  #aside {
    display: block;
    background-color: blue;
    width: 33%;
    max-width: 400px;
    min-width: 250px;
    padding: 1rem;
  }
}

@media (min-width: 992px) {
  .top {
    display: flex;
    justify-content: center;
    .posterContainer {
      max-width: 45%;
      .poster {
        width: 100%;
      }
    }
  }
}
@media (min-width: 1240px) {
  .top {
    display: flex;
    justify-content: center;
    .posterContainer {
      max-width: 33%;
      .poster {
        width: 100%;
      }
    }
  }
}
</style>
