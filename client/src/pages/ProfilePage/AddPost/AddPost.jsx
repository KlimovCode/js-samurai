import React, { Component } from 'react'

export default (props) => {
  let addPostValueRef = React.createRef()

  return (
    <div className="addpost">
      <h3 className="addpost__title">AddPost</h3>
      <textarea className="addpost__text" id="" cols="30" rows="10"
        ref={addPostValueRef}
        value={props.addPostValue}
        onChange={() => props.addPostValueHandler(addPostValueRef.current.value)}
      />
      <button className="addpost__btn"
        onClick={() => {
          props.addPost(props.addPostValue)
          props.addPostValueHandler('')
        }
        }
      >Add post</button>
    </div >
  )
}