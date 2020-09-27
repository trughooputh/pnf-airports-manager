<template>
  <div class="Loader my-3">
    <img src="@/assets/imgs/plane.svg">
  </div>
</template>

<style lang="scss" scoped>
@keyframes fadeIn { 
  from { opacity: 0; } 
}

.Loader {
  img {
    animation: fadeIn .3s infinite alternate;
  }
}

</style>
