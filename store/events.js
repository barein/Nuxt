import EventService from '~/services/EventService'

// Must be a function
export const state = () => ({
  events: []
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  }
}

export const actions = {
  // Actions should return a promise to allow component to know when call is done
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  }
}
