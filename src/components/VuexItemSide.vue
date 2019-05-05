<template>
  <div class="vuex-item-side">
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'vuex-item-side',
  computed: {
    ...mapGetters(
      {items: 'getItems'}
    )
  },
  methods: {
    ...mapMutations(['addItem', 'removeItem']),
  },
}
</script>

<style lang="scss" scoped>

</style>
