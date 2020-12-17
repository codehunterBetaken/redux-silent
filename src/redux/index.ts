import applyMiddleware from './applyMiddleware'
import {MiddlewareAPI, Dispatch, AnyAction} from '../redux'
export * from './types'

let logger = function (api: MiddlewareAPI) {
  return function (next: Dispatch<AnyAction>) {
    return function (action: AnyAction) {
      console.log('变更前的老状态1', api.getState())
      next(action)
      console.log('变更后的新状态1', api.getState())
    }
  }
}
