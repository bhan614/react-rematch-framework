import { connect } from 'react-redux'

function stateFromModels(arr) {
  return (state) => {
    let obj = {}
    arr.forEach((name) => {
      obj[name] = state[name]
    })
    return obj
  }
}

function methodsFromModels(modelNames) {
  return (dispatch) => {
    let obj = {}

    modelNames.forEach((modelName) => {
      obj[`$${modelName}`] = {}

      const methodNames = Object.keys(dispatch[modelName])

      methodNames.forEach((name) => {
        obj[`$${modelName}`][name] = dispatch[modelName][name]
      })
    })
    return obj
  }
}

export function connectComponentWithModels(Component, modelNames) {
  return connect(
    stateFromModels(modelNames),
    methodsFromModels(modelNames)
  )(Component)
}
