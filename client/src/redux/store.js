const ADD_POST = 'ADD_POST'
const ADD_POST_VALUE_HANDLER = 'ADD_POST_VALUE_HANDLER'

export default {
  _state: {
    profilePage: {
      posts: [
        { id: 1, author: 'AAA', text: 'abc text', likes: 1 },
        { id: 2, author: 'BBB', text: 'bac text', likes: 3 }
      ],
      addPostValue: ''
    }
  },
  getState() { return this._state },
  _callSubscriber() { console.log('State changed') },
  subscribe(observer) { this._callSubscriber = observer },

  dispatch(action, state = this._state) {
    const reducer = (state, action) => {
      switch (action.type) {
        case ADD_POST:
          state.profilePage.posts.push({ id: 3, author: 'CCC', text: action.txt, likes: 3 })
          state.profilePage.addPostValue = ''
          return state
        case ADD_POST_VALUE_HANDLER:
          state.profilePage.addPostValue = action.txt
          return state

        default: return state
      }
    }
    this._callSubscriber(reducer(state, action))
  }
}

export const addPost = (txt) => ({ type: ADD_POST, txt: txt })
export const addPostValueHandler = (txt) => ({ type: ADD_POST_VALUE_HANDLER, txt: txt })