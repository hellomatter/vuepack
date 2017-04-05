<template>
  <div class="counter-wrapper">
    <div class="counter">
      \{{ counter }}
    </div>
    <button @click="incrementCounter()">Increment</button>
    <button @click="decrementCounter()">Decrement</button>
    <button @click="incrementCounterBy(2)">Increment by 2</button>
    <button @click="decrementCounterBy(2)">Decrement by 2</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      counter: 'counter/counter'
    })
  },
  methods: {
    ...mapActions([
      'incrementCounter', // map this.increment() to this.$store.dispatch('increment')
      'decrementCounter', // map this.decrement() to this.$store.dispatch('decrement')

      // mapActions also supports payloads:
      'incrementCounterBy', // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      'decrementCounterBy' // this.decrementBy(amount) maps to this.$store.dispatch('decrementBy', amount)
    ])
  }
}
</script>

<style lang="scss">
$codeColor: #f0f0f0;

.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: $codeColor;
  user-select: none;
}
</style>
