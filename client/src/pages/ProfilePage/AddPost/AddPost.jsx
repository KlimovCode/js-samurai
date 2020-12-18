import React, { Component } from 'react'

export default (props) => {
  let txt = React.createRef()
  console.log(txt);


  return (
    <div className="addpost">
      <h3 className="addpost__title">AddPost</h3>
      <textarea className="addpost__text" id="" cols="30" rows="10"
        ref={txt}
      ></textarea>
      <button className="addpost__btn"
        onClick={() => console.log(txt.current.value)}
      >Add post</button>
    </div >
  )
}