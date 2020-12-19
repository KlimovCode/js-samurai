import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_SURNAME = 'CHANGE_SURNAME'

const initialState = {
  name: 'Ivan',
  surname: 'Ivanov'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return state
    }
    case CHANGE_SURNAME: {
      return state
    }
    default: return state
  }
}

const store = createStore(reducer)
console.log(store)

const MainComponent = (props) => {
  const { name, surname } = props

  return (
    <div>
      <input type="text" placeholder="name" value={name} /> <br />
      <input type="text" placeholder="surname" value={surname} />

      <p>
        {`${name} ${surname}`}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.name,
  surname: state.surname
})

const WrappedMainComponent = connect(mapStateToProps)(MainComponent)

export function study2() {
  ReactDOM.render(
    <Provider store={store}>
      <WrappedMainComponent />
    </Provider>
    ,
    document.getElementById('study')
  );
}
