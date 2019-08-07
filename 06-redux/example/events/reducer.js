import eventsTypes from './types'

const initialState = {
  all: {
    data: [],
    api: {
      pending: false,
      error: false,
      success: false
    }
  }
}

const setAPIState = (field = '', value = false) => {
  return ({
    ...initialState.api,
    [field]: value
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case eventsTypes.GET_PENDING: {
      return ({
        ...state,
        api: setAPIState('pending', true)
      })
    }

    case eventsTypes.GET_ERROR: {
      return ({
        ...state,
        api: setAPIState('error', action.payload)
      })
    }

    case eventsTypes.GET_SUCCESS: {
      return ({
        ...state,
        data: action.payload,
        api: setAPIState('success', true)
      })
    }

    default: {
      return state
    }
  }
}
