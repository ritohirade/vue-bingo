<template>
  <div v-if="isOver" class="controller">
    <button v-if="nowShuffle" @click="stop" type="button">Stop</button>
    <button v-else @click="start" type="button">Start</button>
  </div>
  <div v-else>終了</div>
</template>

<script>
  export default{
    methods: {
      start() {
        this.$store.commit('start');
      },
      stop() {
        this.$store.commit('stop');
      }
    },
    computed: {
      nowShuffle() {
        return this.$store.state.nowShuffle;
      },
      isOver() {
        return this.$store.state.remainingNumber.length > 0;
      }
    }
  }
</script>
