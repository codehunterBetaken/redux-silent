import { AnyAction, ReducerMapObject, Reducer, combineReducers } from '../../redux'
import counter1, { Count1State } from './counter1'
export interface CombinedState {
    counter1: Count1State
}

let reducers: ReducerMapObject<CombinedState,AnyAction> = {counter1}
let rootReducer: Reducer<CombinedState,AnyAction> = combineReducers<CombinedState, AnyAction>(reducers)

export default rootReducer