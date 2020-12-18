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
  console.log(txt);
  // state.profilePage.addPostValue = data
}

export default state