<template>
  <div class="props-item-side">
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
export default {
  name: 'props-item-side',
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
  props: ['itemReturn'],
  methods: {
    addItem(index) {
      const elementName = this.items[index].name
      const elementPrice = this.items[index].price

      this.items[index].amount--;

      this.$emit('addItem', {elementName, elementPrice})
    },
    removeItem(index) {
      const elementName = this.items[index].name
      this.$emit('removeItem', {elementName})
    }
  },
  watch: {
    itemReturn() {
      this.items.map(el => {
        if(el.name == this.itemReturn.elementName) {
          el.amount++;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
