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
import { mapState } from 'vuex'
import EventCard from '~/components/EventCard'

export default {
  components: {
    EventCard
  },
  head() {
    return {
      title: 'List of events and homepage'
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events
    })
  },
  async fetch({ error, store }) {
    try {
      await store.dispatch('events/fetchEvents')
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
