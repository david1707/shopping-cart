import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {name: 'Bycicle', price: 560, amount: 12},
      {name: 'TV set', price: 450, amount: 3},
      {name: 'Laptop', price: 1230, amount: 24},
      {name: 'Phone', price: 220, amount: 42},
      {name: 'Gaming chair', price: 170, amount: 33}
    ],
    shoppingCart: []
  },
  getters: {
    getItems: state => {
      return state.items
    },
    getShoppingCart: state => {
      return state.shoppingCart
    },
    getTotalShopping: state => {
        return state.shoppingCart.length == 0 ? 0 :
          state.shoppingCart.map(el => el.price * el.amount)
                            .reduce((total, actual) => total + actual)   
    },
  },
  mutations: {
    addItem(state, index) {
      const elementName = state.items[index].name
      const elementPrice = state.items[index].price

      state.items[index].amount--;

      const elementIndex = state.shoppingCart.findIndex(el => el.name == elementName)

      if(elementIndex != -1) {
        state.shoppingCart[elementIndex].amount++;
      } else {
        state.shoppingCart.push({name: elementName, price: elementPrice, amount: 1})
      }
    },
    removeItem(state, index) {
      const elementName = state.items[index].name
      const elementIndex = state.shoppingCart.findIndex(el => el.name == elementName )

      if(elementIndex != -1) {
        state.shoppingCart[elementIndex].amount--;

        if(state.shoppingCart[elementIndex].amount === 0) {
          state.shoppingCart.splice(elementIndex, 1);
        }
      }

      state.items.map(el => {
        if(el.name == elementName) {
          el.amount++;
        }
      })
    }
  },
})
