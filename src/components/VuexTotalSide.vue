<template>
  <div class="vuex-total-side">
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'vuex-total-side',
  computed: {
    ...mapGetters({
      shoppingCart: 'getShoppingCart',
      totalShopping: 'getTotalShopping'
    }),
  },
}
</script>

<style lang="scss" scoped>

</style>
