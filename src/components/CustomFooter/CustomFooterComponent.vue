<template>
  <footer class="customFooter columns is-centered hero is-light">
    <Logo class="mt-3 mb-5" />
  </footer>
</template>

<script>
import Logo from '@/components/Logo/LogoComponent.vue'

export default {
  name: 'CustomFooter',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
</style>
