<template>
  <nav class="CustomMenu navbar navbar-light bg-light">
    <router-link
      to="/"
      class="navbar-brand"
    >
      <Logo />
    </router-link>
    <router-link to="/airport/add">
      <button class="btn btn-dark" type="text">Add airport</button>
    </router-link>
  </nav>
</template>

<script>
import Logo from '@/components/Logo/LogoComponent.vue'

export default {
  name: 'CustomMenuComponent',
  components: {
    Logo
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.customMenu {
  position: fixed;
  top: 0;
  a {
    font-weight: bold;
    color: #fff;
  }
}
</style>