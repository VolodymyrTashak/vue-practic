<template>
    <div class="container">
     <slot>Default value</slot>
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>

<style lang="scss" scoped>
.container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>