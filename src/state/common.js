const defaultState = {
  loading: false,
  user: ''
}

export default {
  state: {
    ...defaultState
  },
  reducers: {
    updateLoading: (state, payload) => {
      state.loading = payload
      return { ...state }
    }
  },
  effects: {

  }
}
