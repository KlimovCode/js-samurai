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

const changeName = txt => ({ type: CHANGE_NAME, txt })
const changeSurname = (txt) => ({ type: CHANGE_SURNAME, txt })

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.txt
      }
    }
    case CHANGE_SURNAME: {
      return {
        ...state,
        surname: action.txt
      }
    }
    default: return state
  }
}

const store = createStore(reducer)

const MainComponent = (props) => {
  const { name, surname } = props
  const { changeName, changeSurname } = props

  return (
    <div>
      <input type="text" placeholder="name" value={name} onChange={(event) => changeName(event.target.value)} /> <br />
      <input type="text" placeholder="surname" value={surname} onChange={(event) => changeSurname(event.target.value)} />

      <p>
        {`${name} ${surname}`}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.name,
  surname: state.surname
})
const mapDispatchToProps = dispatch => ({
  changeName: (txt) => dispatch(changeName(txt)),
  changeSurname: (txt) => dispatch(changeSurname(txt))
})

const WrappedMainComponent = connect(mapStateToProps, mapDispatchToProps)(MainComponent)

export function study2() {
  ReactDOM.render(
    <Provider store={store}>
      <WrappedMainComponent />
    </Provider>
    ,
    document.getElementById('study')
  );
}
