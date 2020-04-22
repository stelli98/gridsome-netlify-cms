<template>
  <div class="container header">
    <header id="header">
      <div class="brand">
        <div class="name">
          <h1 class="page-title"><span class="yellow">Le</span>Kino</h1>
          <h3 class="catchphrase">Films et séries sur grand écran</h3>
        </div>
        <p class="pitch">
          The reason why you should use this site: Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Expedita, quaerat. <br />
          <span>Magic!</span>
        </p>
      </div>
    </header>
    <!--End of Header-->
  </div>
  <!--End of container header-->
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
#header {
  width: 100%;
  height: 50vh;
  display: grid;
  place-items: center;
  margin: 2rem 0;

  .brand {
    display: grid;
    place-items: center;
    padding: 2em 0;
    width: 100%;

    .name {
      display: block;
      text-align: center;

      .pitch {
        font-size: 1rem;
        margin-top: 2em;
      }
    }
  }
}
</style>
