export default {
  _state: {
    profilePage: {
      posts: [
        { id: 1, author: 'AAA', text: 'abc text', likes: 1 },
        { id: 2, author: 'BBB', text: 'bac text', likes: 3 }
      ],
      addPostValue: '123'
    }
  },
  getState() { return this._state },

  addPost(txt) {
    this._state.profilePage.posts.push({ id: 3, author: 'CCC', text: txt, likes: 3 })
    this._state.profilePage.addPostValue = ''
    this._callSubscriber(this._state)
  },
  addPostValueHandler(txt) {
    this._state.profilePage.addPostValue = txt
    this._callSubscriber(this._state)
  },

  _callSubscriber() { console.log('State changed') },
  subscribe(observer) { this._callSubscriber = observer }
}