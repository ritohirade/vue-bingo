<template>
    <div class="result">
      <div class="now-shuffle">
        シャッフル中
      </div>
      <div class="result-number">
        結果の数字
      </div>
    </div>
</template>
<script>
  export default {
    computed: {
      resultNumber() {
        return this.$store.state.test;
      }
    }
  }
</script>
