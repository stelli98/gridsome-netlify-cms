<template>
  <layout>
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
            </div>
          </div>
          <div class="bottom">
            <tabs>
              <tab name="Synopsis" selected="true">
                <div class="excerpt">
                  <h3 class="tabTitle">Le synopsis</h3>
                  {{ $page.movie.excerpt }}
                </div>
              </tab>
              <Timetable />
            </tabs>
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
      </div>
    </div>
  </layout>
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
import Timetable from "@/components/Timetable.vue";

export default {
  components: {
    Tab,
    Tabs,
    Timetable
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2rem;
  font-weight: 500;
}
h3 {
  font-size: 1.5rem;
  font-weight: 500;
}

p {
  margin: 0;
  padding: 0.5em;
}

.nav__link {
  padding: 1em;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 1em 0.5em;
  font-size: 0.85rem;
}

.main {
  width: 100%;
  padding: 0.5rem;
}

.top {
  padding-bottom: 5%;
  .posterContainer {
    .poster {
      width: 100%;
      border-radius: 10px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .movieTitle {
      text-align: center;
      margin-bottom: 1em;
    }
  }
  .details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 1em;
    &__detail {
      font-size: 0.75rem;
      border-radius: 10px;
      background-color: #fcb0a1;
      padding: 0.5em;
    }
  }
}

.tabTitle {
  font-size: 1.25;
  font-weight: 500;
}

.excerpt {
  padding: 1em 0 2em 0;
}

// Media queries
@media (min-width: 648px) {
  .info {
    padding-left: 0 1em;
  }
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

@media (min-width: 992px) {
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
