<template>
    <div>
      <div class="content">
        <AppHeader />
        <router-view></router-view>
      </div>
      <AppFooter />
    </div>
</template>

<script>
import AppFooter from './components/Footer.vue'
import AppHeader from './components/Header.vue'

export default {
   name: 'App',
     components: {
      AppFooter,
      AppHeader
    },
  }

</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
.wrapper {
 display: block;
 text-align: center;
}

// .apartsments-filter {
//   margin-bottom: 40px;
// }

</style>