<template>
  <div class="props-total-side">
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
export default {
  name: 'props-total-side',
  data() {
    return {
      shoppingCart: [],
    }
  },
  props: ['newItem', 'removeItem'],
  computed: {
    totalShopping() {
      return this.shoppingCart.length == 0 ? 0 :
        this.shoppingCart.map(el => el.price * el.amount)
                          .reduce((total, actual) => total + actual)
            
    },
  },
  watch: {
    newItem() {
      const {elementName, elementPrice} = this.newItem
      const elementIndex = this.shoppingCart.findIndex(el => el.name == elementName)

      if(elementIndex != -1) {
        this.shoppingCart[elementIndex].amount++;
      } else {
        this.shoppingCart.push({name: elementName, price: elementPrice, amount: 1})
      }
    },
    removeItem() {
      const elementIndex = this.shoppingCart.findIndex(el => el.name == this.removeItem.elementName)

      if(elementIndex != -1) {
        this.shoppingCart[elementIndex].amount--;
        this.$emit('returnItem', {elementName: this.removeItem.elementName})

        if(this.shoppingCart[elementIndex].amount === 0) {
          this.shoppingCart.splice(elementIndex, 1);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
