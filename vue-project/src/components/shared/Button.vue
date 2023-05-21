<template>
    <button v-on="$listeners" v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
    <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
         type: {
          type: String,
          default: 'button'
         },
          outlined: {
           type: Boolean,
           default: false
          }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
 display: inline-block;
 font-size: 18px;
 color: #FFFFFF;
 background: #FF662D;
 cursor: pointer;
 border: 1px solid transparent;
 padding: 12px 54px;
 width: 349px;
 height: 48.56px;

 &--outlined {
  background: none;
  border: 1px solid #FF662D;
  color: #FF662D;
  }
}
</style>