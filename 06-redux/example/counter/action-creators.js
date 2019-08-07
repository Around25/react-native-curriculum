import counterTypes from './types'

const increment = () => ({
  type: counterTypes.increment
})

const reset = () => ({
  type: counterTypes.reset
})

export default {
  increment,
  reset
}
