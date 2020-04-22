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
                <p>{{ $page.movie.genre }}</p>
                <p>{{ $page.movie.duration }}</p>
                <p>{{ $page.movie.public }}</p>
                <p>{{ $page.movie.releaseDate }}</p>
              </div>
              <h4 class="director">
                <strong>un film de: </strong>{{ $page.movie.director }}
              </h4>
              <h4 class="director">
                <strong>Avec: </strong>{{ $page.movie.director }}
              </h4>

              <div class="excerpt">{{ $page.movie.excerpt }}</div>
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

            <div class="timetable">
              timetable
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
export default {};
</script>

<style lang="scss" scoped>
.banner {
  background-color: aqua;
}

.wrapper {
  display: flex;
  justify-content: space-around;
}

.main {
  width: 100%;
  padding: 1rem;
}

.top {
  .posterContainer {
    max-width: 100vw;
    .poster {
      width: 100%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 100%;
    padding: 0 2em;

    .movieTitle {
      text-align: center;
    }
  }
  .details {
    background-color: grey;
    width: 100%;
    display: flex;
    justify-content: space-around;
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
