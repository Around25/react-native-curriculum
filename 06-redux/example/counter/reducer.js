import counterTypes from './types'

const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  if (action.type === counterTypes.increment) {
    return ({
      ...state,
      value: state.value + 1
    })
  }

  if (action.type === counterTypes.reset) {
    return ({
      ...state,
      value: initialState.value
    })
  }

  return state
}
