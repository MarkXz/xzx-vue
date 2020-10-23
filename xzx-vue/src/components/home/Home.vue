<template>
  <div class="hello">
    <div class="toto">{{msg}}</div>
  </div>
</template>

<script>
import mix from './Home-mixins.js'
export default {
  mixins: [mix]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  .toto {
    font-size: 0.2rem;
    text-align: center;
    padding-top: 0.2rem;
  }
}
</style>
