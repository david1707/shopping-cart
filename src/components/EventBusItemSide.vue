<template>
  <div class="event-bus-item-side">
    <b-row v-for="(item, index) in items" :key="item.name" class="element">
        <b-col cols="6">
          <p>{{ item.name }} ({{ item.price}} €)</p>
        </b-col>
        <b-col cols="4">
          <b-button variant="light" size="md" @click="addItem(index)" :disabled="item.amount <= 0"> +</b-button>
          <b-button variant="light" size="md" @click="removeItem(index)">-</b-button>
        </b-col>
        <b-col cols="2">
          <p>{{ item.amount }}</p>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
  name: 'event-bus-item-side',
  data() {
    return {
      items: [
        {name: 'Bycicle', price: 560, amount: 12},
        {name: 'TV set', price: 450, amount: 3},
        {name: 'Laptop', price: 1230, amount: 24},
        {name: 'Phone', price: 220, amount: 42},
        {name: 'Gaming chair', price: 170, amount: 33}
      ],
    }
  },
  methods: {
    addItem(index) {
      const elementName = this.items[index].name
      const elementPrice = this.items[index].price

      this.items[index].amount--;

      EventBus.$emit('addItem', {elementName, elementPrice})
    },
    removeItem(index) {
      const elementName = this.items[index].name
      EventBus.$emit('removeItem', {elementName})
    },
    itemReturn(item) {
      this.items.map(el => {
        if(el.name == item.elementName) {
          el.amount++;
        }
      })
    }
  },
  created() {
    EventBus.$on('returnItem', this.itemReturn)
  },
  destroyed() {
    EventBus.$off('returnItem', this.itemReturn)
  }
}
</script>

<style lang="scss" scoped>

</style>
