let rerenderTree = () => console.log('State changed')

const state = {
  profilePage: {
    posts: [
      { id: 1, author: 'AAA', text: 'abc text', likes: 1 },
      { id: 2, author: 'BBB', text: 'bac text', likes: 3 }
    ],
    addPostValue: ''
  }
}

export const addPost = txt => {
  state.profilePage.posts.push({ id: 3, author: 'CCC', text: txt, likes: 3 })
  rerenderTree(state)
}
export const addPostValueHandler = txt => {
  state.profilePage.addPostValue = txt
  rerenderTree(state)
}

export const subscribe = (observer) => {
  rerenderTree = observer
}
export default state