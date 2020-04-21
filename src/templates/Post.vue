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