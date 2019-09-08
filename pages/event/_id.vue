<template>
  <div>
    <h1>Event #{{ event.id }}</h1>
  </div>
</template>

<script>
import EventService from '~/services/EventService'

export default {
  name: 'Id',
  head() {
    return {
      title: 'Event ' + this.event.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about Event #' + this.event.id
        }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  async asyncData({ error, route }) {
    try {
      const response = await EventService.getEvent(route.params.id)

      return {
        event: response.data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event' + route.params.id
      })
    }
  }
}
</script>

<style scoped></style>
