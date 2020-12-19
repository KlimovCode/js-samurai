const ADD_POST = 'ADD_POST'
const ADD_POST_VALUE_HANDLER = 'ADD_POST_VALUE_HANDLER'

export default (state, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(state.posts)
      state.posts.push({ id: 3, author: 'CCC', text: action.txt, likes: 3 })
      state.addPostValue = ''
      return state
    case ADD_POST_VALUE_HANDLER:
      state.addPostValue = action.txt
      return state

    default: return state
  }
}

export const addPost = (txt) => ({ type: ADD_POST, txt: txt })
export const addPostValueHandler = (txt) => ({ type: ADD_POST_VALUE_HANDLER, txt: txt })