<template>
  <div id="appContainer">
    <nav class="topNav">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/blog">Lelog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </nav>
    <slot />
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

<style lang="scss" scoped>
#appContainer {
  display: grid;
  place-items: center;
  margin: 2rem 0;
  width: 90%;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: turquoise;
}

.topNav {
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
