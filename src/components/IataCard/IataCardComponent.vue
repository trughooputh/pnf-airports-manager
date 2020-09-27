<template>
  <div class="IataCard">
    <i class="fas fa-plane mr-2" />
    <span >{{ iata }}</span>
  </div>
</template>

<script>
export default {
  name: 'IataCard',
  props: {
    iata: {
      type: String,
      default: '???'
    }
  },
};
</script>

<style lang="scss" scoped>
.IataCard {
  font-size: 2rem;
  background-color: #000;
  color: #fff;
  padding: 4px;
  border-radius: 8px;
  line-height: 36px;
  max-width: 140px;
  i {
    font-size: 1.3rem;
    position: relative;
    top: -3px;
    left: 4px;
  }
}
</style>
