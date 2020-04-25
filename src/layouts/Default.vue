<template>
  <div class="layout ">
    <TopNav/>
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
import TopNav from "@/components/TopNav";
export default {
  components: {
    TopNav
  }
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