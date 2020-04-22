<template>
  <layout>
    <h2>Le Blog</h2>
    <article
      class="postCard"
      v-for="edge in $static.allPost.edges"
      :key="edge.node.id"
    >
      <g-image
        class="coverImage postCard-left"
        alt="coverImage"
        :src="edge.node.cover_image"
        style="max-width: 25%"
      />
      <div class="postCard-right">
        <h2 class="title">
          {{ edge.node.title }}
        </h2>
        <p class="excerpt">{{ edge.node.excerpt }}</p>
        <p class="date">
          Publié le {{ edge.node.date }} - {{ edge.node.timeToRead }}mn de
          lecture
        </p>

        <g-link :to="edge.node.path">Lire</g-link>
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
        path
      }
    }
  }
}
</static-query>
<script>
export default {};
</script>

<style lang="css" scoped>
.postCard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0em 1em;
}
.postCard-right {
  padding: 1em 1.5em;
}
.pager {
  letter-spacing: 0.25rem;
  padding: 2.5em 1.25em;
}
</style>
© 2020 GitHub, Inc.
