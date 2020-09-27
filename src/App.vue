<template>
  <div id="app" class="text-center">
    <CustomMenu />
    <main id="main" class="container py-3">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view :key="$route.path" />
      </transition>
    </main>
    <CustomFooter />
  </div>
</template>

<script>
import CustomMenu from '@/components/CustomMenu/CustomMenuComponent'
import CustomFooter from '@/components/CustomFooter/CustomFooterComponent'

export default {
  name: 'App',
  components: {
    CustomMenu,
    CustomFooter,
  }
}
</script>

<style lang="scss">
$main-color:#2c3e50;
$pink-color: #ff80e7;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  color: $main-color;
  main {
    .form-control:focus {
      border-color: $pink-color;
      box-shadow: 0 0 3px 0 $pink-color;
    }
  }
  h1 {
    letter-spacing: -3px;
  }
  a {
    color: $main-color;
  }
  hr {
    border-top: 1px dashed #dadada;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
