const sum = (a, b) => {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Unsupported values')
    }
    return a + b
  } catch (err) {
    return 0
  }
}

export {
  sum
}
