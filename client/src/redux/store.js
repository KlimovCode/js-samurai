import profileReducer from './profile-reducer'

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
    state.profilePage = profileReducer(state.profilePage, action)
    this._callSubscriber(state)
  }
}