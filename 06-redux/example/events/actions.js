import eventsAC from './action-creators'

const get = () => async (dispatch, getState) => {
  // dispatch pending state
  // api call to get data
  // dispatch success state
  // or dispatch error state

  dispatch(eventsAC.get.pending());
  try {
    const res = await fetch('http://dfsdfsd')
    if (!res.data) {
      throw new Error('Whatever, no data :)')
    }
    if (res.data.foo === 'bla') {
      throw new Error('Nah')
    }
    dispatch(eventsAC.get.success(res.data));
  } catch (err) {
    dispatch(eventsAC.get.error(err));
  }
}

export default {
  get
}
