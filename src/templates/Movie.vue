<template>
  <div>
    <g-link class="nav__link" to="/">Retour</g-link>
    <div class="container">
      <div class="wrapper">
        <div class="main">
          <div class="top">
            <g-image
              class="poster"
              :src="$page.movie.poster"
              style="width: 100%"
              />
            <div class="info">
              <h2 class="movieTitle">{{ $page.movie.title }}</h2>
              <h4 class="director">
                <strong>un film de: </strong>{{ $page.movie.director }}
              </h4>
              <div class="details">
                <p>{{ $page.movie.genre }}</p>
                <p>{{ $page.movie.duration }}</p>
                <p>{{ $page.movie.public }}</p>
                <p>{{ $page.movie.releaseDate }}</p>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="excerpt">{{ $page.movie.excerpt }}</div>
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
  background-color: pink;
  width: 100%;
  padding: 1rem;
}

.top {
  background-color: coral;
  .poster {
    background-color: ghostwhite;
    min-width: 33%;
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
  background-color: blue;
  width: 33%;
  max-width: 400px;
  min-width: 200px;
  padding: 1rem;
}

// Media queries

@media (min-width: 779px) {
  #aside {
    display: block;
  }
  .top {
    display: flex;
    .poster {
      max-width: 33%;
    }
  }
}
</style>
