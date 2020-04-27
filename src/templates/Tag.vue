
<template>
  <layout>
    <h2>#{{ $page.tag.title }}</h2>
    <article
      class="tag postCard"
      v-for="edge in $page.tag.belongsTo.edges"
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
        <g-link
          style="padding-right: 0.25rem"
          v-for="tag in edge.node.tags"
          :to="tag.path"
          :key="tag.id"
          class="tags"
          >#{{ tag.id }}></g-link
        >
        
        <g-link :to="edge.node.path">Lire</g-link>
      </div>
    </article>
  </layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
<page-query>
  query ($id: ID!) 
{
  tag (id: $id) {
    belongsTo {
      edges {
        node {
          ...on Post {
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
}
}
</page-query>

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
</style>