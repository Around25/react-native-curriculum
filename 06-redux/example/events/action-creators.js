import eventsTypes from './types'

const getPending = () => ({
  type: eventsTypes.pending
})

const getError = (payload) => ({
  type: eventsTypes.error,
  payload
})

const getSuccess = (data) => ({
  type: eventsTypes.success,
  payload: data
})

const get = {
  pending: getPending,
  error: getError,
  success: getSuccess
}

export default {
  get
}
