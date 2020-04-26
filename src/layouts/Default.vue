<template>
  <div class="layout ">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {}
};
</script>


<style>
body {
  background-color: #1a202c;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.layout {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.nav__link {
  margin-left: 20px;
}
</style>