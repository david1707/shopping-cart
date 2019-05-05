<template>
  <div class="same-component">
    <div class="container">
      <div class="item-side">
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
      <div class="total-side">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'same-component',
  data() {
    return {
      items: [
        {name: 'Bycicle', price: 560, amount: 12},
        {name: 'TV set', price: 450, amount: 3},
        {name: 'Laptop', price: 1230, amount: 24},
        {name: 'Phone', price: 220, amount: 42},
        {name: 'Gaming chair', price: 170, amount: 33}
      ],
      shoppingCart: [],
    }
  },
  computed: {
    totalShopping() {
      return this.shoppingCart.length == 0 ? 0 :
        this.shoppingCart.map(el => el.price * el.amount)
                          .reduce((total, actual) => total + actual)
            
    }
  },
  methods: {
    addItem(index) {
      const elementName = this.items[index].name
      const elementPrice = this.items[index].price

      this.items[index].amount--;

      // Check if the current item is already on the shoppingCart
      const elementIndex = this.shoppingCart.findIndex(el => el.name == elementName)

      if(elementIndex != -1) {
        this.shoppingCart[elementIndex].amount++;
      } else {
        this.shoppingCart.push({name: elementName, price: elementPrice, amount: 1})
      }
    },
    removeItem(itemIndex) {
      const elementName = this.items[itemIndex].name

      const elementIndex = this.shoppingCart.findIndex(el => el.name == elementName)
      if(elementIndex != -1) {
        this.shoppingCart[elementIndex].amount--;
        this.items[itemIndex].amount++;

        if(this.shoppingCart[elementIndex].amount === 0) {
          this.shoppingCart.splice(elementIndex, 1);
        }
      }
    }
  }
  
}
</script>

<style lang="scss" scoped>

  .container {

    display: flex;
    flex-direction: row;

    > div {
      height: 800px;
      width: 50%;
      opacity: 0.7;
    }

    .item-side {
      background: green;

      .element {
        margin: 15px 0px;

        p {
          vertical-align: middle;
          margin-bottom: 0px;
          background: white;
          opacity: 0.95;
          border: 2px solid rgb(133, 133, 238);
        }
      }
    }

    .total-side {
      background: yellowgreen;
    }

    ul {
      list-style-type: none;
      padding-left: 0px;
    }

  }
</style>
