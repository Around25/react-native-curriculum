import counterAC from './action-creators'

// const increment = () => {
//   return ({
//     type: counterTypes.increment
//   })
// }

const increment = () => (dispatch, getState) => {
  // some logic here
  const state = getState();
  if (state.counter.value === 16) {
    return dispatch(counterAC.reset())
  }

  dispatch(counterAC.increment())
}

export default {
  increment
}
