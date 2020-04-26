<template>
  <div id="mobileNav">
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
  name: "mobile-nav"
};
</script>

<style lang="scss" scoped>
#logo {
  position: absolute;
  top: 1em;
  left: 1em;
  font-size: 1.5rem;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 1.75em;
  right: 4em;
  list-style-type: none;

  &__item {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    margin: 0.5em 0;
    cursor: pointer;
    &:hover {
      color: #111;
    }
  }
}
</style>