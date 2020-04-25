<template>
  <div>
    <nav class="topNav">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/blog">Lelog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </nav>
  </div>
</template>

<script>
export default {
  name: "top-nav"
};
</script>

<style lang="scss" scoped>
</style>