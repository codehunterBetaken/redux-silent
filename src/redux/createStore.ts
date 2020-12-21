import { StoreCreator, Action, Reducer, Store, Linstener, Dispatch, Subscribe } from "."
const CreateStore: StoreCreator = <S, A extends Action, Ext, StateExt>(reducer: Reducer<S,A>,preloadedState?:S):Store<S,A> => {
    //currentState 不一定传所以需要 as S
    let currentState: S = preloadedState as S
    let currentListeners: Array<Linstener> = []
    function getState(): S {
        return currentState
    }

    const dispatch: Dispatch<A> = <T extends A>(action: T) => {
        currentState = reducer(currentState,action)
        currentListeners.forEach(l=>l())
        return action
    } 

    dispatch({type: "@REDUX@INIT"} as A)

    let subscribe:Subscribe = (linstener: Linstener) => {
        currentListeners.push(linstener)
        return function() {
            let index:number = currentListeners.indexOf(linstener)
            currentListeners.splice(index)
        } 
    }
    const store: Store<S, A> = {
        getState,
        dispatch,
        subscribe
      }
    
      return store
}

export default CreateStore