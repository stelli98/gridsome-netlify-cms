<template>
  <div id="TopNav">
    <g-link id="logo" to="/"><span>Le</span>Kino</g-link>
    
    <ul class="menu">
      <g-link class="menu__item" to="/">À l'affiche</g-link>
      <g-link class="menu__item">Bientôt</g-link>
      <g-link class="menu__item" to="/blog">LeBlog</g-link>
      <g-link class="menu__item" to="/about">À propos</g-link>
      <g-link class="menu__item">Un mot</g-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "top-nav"
};
</script>

<style lang="scss" scoped>
#TopNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0;
}

#logo {
  top: 1em;
  left: 1em;
  font-size: 1.5rem;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  &__item {
    color: magenta;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0.5em;
    cursor: pointer;
    &:hover {
      color: #111;
    }
  }
}
</style>