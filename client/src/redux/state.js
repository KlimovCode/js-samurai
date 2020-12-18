import { rerenderTree } from '../render'

const state = {
  profilePage: {
    posts: [
      { id: 1, author: 'AAA', text: 'abc text', likes: 1 },
      { id: 2, author: 'BBB', text: 'bac text', likes: 3 }
    ],
    addPostValue: '123'
  }
}

export const addPost = txt => {
  state.profilePage.posts.push({ id: 3, author: 'CCC', text: txt, likes: 3 })
  rerenderTree(state)
}

export default state