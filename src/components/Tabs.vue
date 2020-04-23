<template>
  <article>
    <nav class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
          class="nav-item"
          :class="{ 'is-active': tab.isActive }"
          @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </nav>
    <section class="tabs__details">
    <slot></slot>
  </section>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: []
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  },
  created() {
    this.tabs = this.$children;
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  margin: 0 0.5em;
}
.tabs-details {
  padding: 0.5em;
}

ul {
  display: flex;
  padding: 0;

  li {
    margin-right: 2em;
  }
}

.nav-item {
  cursor: pointer;
  &:hover {
    background-color: rgb(250, 164, 250);
  }
  &.is-active {
    background-color: rgb(250, 164, 250);
    padding: 0 0.5em;
  }
}
</style>