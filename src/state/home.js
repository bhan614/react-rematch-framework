import fetch from '../util/fetch';

const defaultState = {
  page: {
      pageNo: 1,
      flowType: 33000,
      flowAction: 12,
      takeStatusList: '',
      'queryParam[BUSINESS_TYPE]': 'ADDRESS_APPLY'
  },
  tableData: []
}

export default {
  state: {
    ...defaultState
  },
  reducers: {
    setData: (state, payload) => {
      state.tableData = payload.data
      return { ...state }
    }
  },
  effects: {
    async loadData (payload, rootState) {
      const value = await fetch('/processFlow/pageQuery?', {
          data: defaultState.page
      })
      this.setData(value)
    }
  }
}
