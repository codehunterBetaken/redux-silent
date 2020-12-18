import {
    createStore, applyMiddleware, StoreEnhancer, MiddlewareAPI, Dispatch, AnyAction
  } from '../redux'
let logger = function (api: MiddlewareAPI) {
    return function (next: Dispatch<AnyAction>) {
      return function (action: AnyAction) {
        console.log('变更前的老状态1', api.getState())
        next(action)
        console.log('变更后的新状态1', api.getState())
      }
    }
  }
  
  let storeEnhancer : StoreEnhancer = applyMiddleware<{},CombinedState>(logger)

  export default store