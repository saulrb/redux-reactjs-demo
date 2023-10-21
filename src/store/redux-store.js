const redux = require('redux')

const initialState = {
  counter: 0,
  name: 'John'
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value
      }
    default:
      return state
  }
}

const store = redux.createStore(counterReducer)

console.log(store.getState())

const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
