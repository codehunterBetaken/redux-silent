import { StoreCreator, Action, Reducer, Store, Listener } from "./"
const createStore: StoreCreator = <S, A extends Action, Ext, StateExt>(reducer: Reducer<S,A>,preloadedState?:S):Store<S,A> => {
    //currentState 不一定传所以需要 as S
    let currentState: S = preloadedState as S
    let currentListeners: Array<Listener> = []


}