import { AnyAction, ReducerMapObject, Reducer, combineReducers } from '../../redux'
import counter1, { Count1State } from './counter1'
import counter2, { Count2State } from './counter2'
export interface CombinedState {
    counter1: Count1State,
    counter2: Count2State
}

let reducers: ReducerMapObject<CombinedState,AnyAction> = {counter1,counter2}
let rootReducer: Reducer<CombinedState,AnyAction> = combineReducers<CombinedState, AnyAction>(reducers)

export default rootReducer