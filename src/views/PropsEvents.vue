<template>
  <div class="props-elements">
    <div class="container">
      <props-item-side @addItem="addItem" @removeItem="removeItem" :itemReturn="itemReturn"/>
      <props-total-side @returnItem="returnItem" :newItem="item" :removeItem="itemRemove" />
    </div>
  </div>
</template>

<script>
import PropsItemSide from '@/components/PropsItemSide'
import PropsTotalSide from '@/components/PropsTotalSide'

export default {
  name: 'props-elements',
  components: {
    PropsItemSide,
    PropsTotalSide
  },
  data() {
    return {
      item: '',
      itemRemove: '',
      itemReturn: '',
    }
  },
  methods: {
    addItem(data) {
      this.item = data;
    },
    removeItem(elementName) {
      this.itemRemove = elementName
    },
    returnItem(elementName) {
      this.itemReturn = elementName
    }
  }
  
}
</script>

<style lang="scss" >

  .container {

    display: flex;
    flex-direction: row;

    > div {
      height: 800px;
      width: 50%;
      opacity: 0.7;
    }

    .props-item-side {
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

    .props-total-side {
      background: yellowgreen;
    }

    ul {
      list-style-type: none;
      padding-left: 0px;
    }

  }
</style>
