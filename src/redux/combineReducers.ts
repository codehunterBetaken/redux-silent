import {Action, AnyAction, ReducerMapObject, Reducer} from './'

export function combineReducers<S, A extends Action = AnyAction>(
    reducers: ReducerMapObject<S, A>
): Reducer<S,A>

export default function combineReducers<S, A extends Action = AnyAction>(
    reducers: ReducerMapObject<S, A>
) {
    return function(state:S ={} as S, action: A) {
        const nextState:S = {} as S
        let key: keyof S
        for(key in reducers) {
            let reducer: Reducer<S[keyof S],A> = reducers[key]
            let nextStateForKey: S[keyof S] = reducer(state[key],action)
            nextState[key] = nextStateForKey
        }
        return nextState
    }
}