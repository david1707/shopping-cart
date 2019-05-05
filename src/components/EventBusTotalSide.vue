<template>
  <div class="event-bus-total-side">
    <h4>Elements in the Shopping Cart:</h4>
    <b-row v-for="item in shoppingCart" :key="item.name" class="element">
        <b-col cols="6">
          <p>{{ item.name }} </p>
        </b-col>
        <b-col cols="2">
          <p>{{ item.amount }}</p>
        </b-col>
    </b-row>

    <h5>Total: {{ totalShopping }} €</h5>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
  name: 'event-bus-total-side',
  data() {
    return {
      shoppingCart: [],
    }
  },
  computed: {
    totalShopping() {
      return this.shoppingCart.length == 0 ? 0 :
        this.shoppingCart.map(el => el.price * el.amount)
                          .reduce((total, actual) => total + actual)
            
    },
  },
  methods: {
    addItem(item) {
      const {elementName, elementPrice} = item
      const elementIndex = this.shoppingCart.findIndex(el => el.name == elementName)

      if(elementIndex != -1) {
        this.shoppingCart[elementIndex].amount++;
      } else {
        this.shoppingCart.push({name: elementName, price: elementPrice, amount: 1})
      }
      this.shoppingCart.push();
    },
    removeItem(item) {
      const elementIndex = this.shoppingCart.findIndex(el => el.name == item.elementName )

      if(elementIndex != -1) {
        this.shoppingCart[elementIndex].amount--;
        EventBus.$emit('returnItem', {elementName: item.elementName})

        if(this.shoppingCart[elementIndex].amount === 0) {
          this.shoppingCart.splice(elementIndex, 1);
        }
      }
    },
  },
  created() {
    EventBus.$on('addItem', this.addItem)
    EventBus.$on('removeItem', this.removeItem)
  },
  destroyed() {
    EventBus.$off('addItem', this.addItem)
    EventBus.$off('removeItem', this.removeItem)
  }
}
</script>

<style lang="scss" scoped>

</style>
