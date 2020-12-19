import { createStore } from 'redux'

export const study = () => {
  const initialState = {
    num: 0
  }

  function reducer(state = initialState, action) {
    if (action.type === 'INCREMENT') {
      // const newState = {
      //   ...state,
      //   num: state.num + 1
      // }
      return {
        ...state,
        num: state.num + 1
      }
    }
    return state
  }

  const store = createStore(reducer)

  console.log(store.getState())

  store.dispatch({ type: 'INCREMENT' })
  console.log(store.getState())
}
