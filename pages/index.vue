<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  components: {
    EventCard
  },
  head() {
    return {
      title: 'List of events and homepage'
    }
  },
  async asyncData({ $axios, error }) {
    try {
      const response = await $axios.get('http://localhost:3030/events')

      return {
        events: response.data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try later'
      })
    }
  }
}
</script>

<style></style>
