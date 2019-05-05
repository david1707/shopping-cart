<template>
  <div class="eventbus-elements">
    <div class="container">
      <event-bus-item-side />
      <event-bus-total-side  />
    </div>
  </div>
</template>

<script>
import EventBusItemSide from '@/components/EventBusItemSide'
import EventBusTotalSide from '@/components/EventBusTotalSide'

export default {
  name: 'eventbus-elements',
  components: {
    EventBusItemSide,
    EventBusTotalSide
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

    .event-bus-item-side {
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

    .event-bus-total-side {
      background: yellowgreen;
    }

    ul {
      list-style-type: none;
      padding-left: 0px;
    }

  }
</style>
