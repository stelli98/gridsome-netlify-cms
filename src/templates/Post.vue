<template>
  <layout>
    <article class="post">
      <g-image class="banner" alt="banner" :src="$page.post.banner" />
      <h2 class="title">
        {{ $page.post.title }}
      </h2>
      <p class="date">
        Publié le {{ $page.post.date }} - {{ $page.post.timeToRead }}mn de
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

      <p class="content" v-html="$page.post.content" />
    </article>
  </layout>
</template>
<page-query>
query ($path :String!) {
  post(path: $path){
    id
    path
    title
    banner
    date(format: "Do MMMM, YYYY")
    timeToRead
    tags {
      id
      path

    }
    content
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="css" scoped>
.banner {
  width: 100%;
  max-height: 33%;
}
</style>