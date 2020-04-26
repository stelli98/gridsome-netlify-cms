<template>
  <div id="app">
    <MobileNav />
    <div class="content" :class="{'open':showNav}">
      <div id="burger" v-if="mobileView"
        @click="showNav = !showNav">
        <i class="fas fa-bars"></i>
      </div>
      <TopNav v-if="!mobileView" />
      <slot />
    </div>
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
import TopNav from "@/components/TopNav.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  components: {
    TopNav,
    MobileNav
  },
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
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

.content {
  position: absolute;
  top: 10px;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #fff;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.open {
  transform: translateX(-50%);
}

@media (min-device-width: 648px) {
  .open {
    transform: translateX(-33%);
  }
}

#burger {
  position: absolute;
  right: 1em;
  padding: 10px 10px 20px;
  cursor: pointer;
}

i {
  font-size: 2.5rem;
}
</style>