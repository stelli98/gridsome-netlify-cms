<template>
  <layout>
    <h2>Le Blog</h2>
    <article
      class="postCard"
      v-for="edge in $static.allPost.edges"
      :key="edge.node.id"
    >
      <div class="imgContainer">
        <g-image
        class="postCard__coverImage"
        alt="edge.node.title"
        :src="edge.node.cover_image"
      />
      </div>
      <div class="postCard__details">
        <h3 class="postCard__title">{{ edge.node.title }}</h3>
        <g-link
          v-for="tag in edge.node.tags"
          :to="tag.path"
          :key="tag.id"
          class="postCard__tag"
          >{{ tag.id }}</g-link
        >
        <p class="postCard__description">{{ edge.node.excerpt }}</p>
        <p class="postCard__author">Publié le {{ edge.node.date }}</p>
        <div class="postCard__footer">
          <p class="postCard__footer-item postCard__author">Par {{ edge.node.author }}</p>
          <p class="postCard__footer-item postCard__read"> - {{ edge.node.timeToRead }}mn </p>
        </div>
        <button class="btn btn__more"><g-link :to="edge.node.path">Lire</g-link></button>
        
      </div>
    </article>
  </layout>
</template>
<static-query>
query
{
  allPost {
    
    edges{
      node{
        id
        title
        excerpt
        cover_image
        date(format: "Do MMMM, YYYY")
        timeToRead
        tags {
          id
          path

        }
        path
      }
    }
  }
}
</static-query>
<script>
export default {

</script>

<style lang="scss" scoped>
.postCard {
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 0.1875em 1.5rem;
  border-radius: 0.375em;
  overflow: hidden;
  margin: 1em 0 1.5em;

  &__title {
    margin-bottom: 0.75em;
  }

  &__tag {
    background-color: rgb(207, 205, 205);
    border-radius: 10px;
    font-size: 0.75em;
    padding: 0.5rem;
    margin: 0 0.25em;
  }
}

.postCard__coverImage {
  display: block;
  width: 100%;
  object-fit: cover;
}

.postCard__description {
  margin: 1em 0;
}

.postCard__details {
  padding: 0 1.5em 1em;
}

.postCard__footer {
  display: flex;
  align-items: center;
  margin: 1em 0;

  &-item {
    margin-left: 1em;
  }
}

.btn {
  font-weight: 500;
  padding: 0.4em 0.6em;
  border-radius: 5px;
  width: 6em;
  padding: 0.5em;
  margin: 0 0.5em;

  &__more {
    background-color: coral;
  }
}
</style>
