<template>
  <div class="vuex-elements">
    <div class="container">
      <vuex-item-side />
      <vuex-total-side  />
    </div>
  </div>
</template>

<script>
import VuexItemSide from '@/components/VuexItemSide'
import VuexTotalSide from '@/components/VuexTotalSide'

export default {
  name: 'vuex-elements',
  components: {
    VuexItemSide,
    VuexTotalSide
  },
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

    .vuex-item-side {
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

    .vuex-total-side {
      background: yellowgreen;
    }

    ul {
      list-style-type: none;
      padding-left: 0px;
    }

  }
</style>
