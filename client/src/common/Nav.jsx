import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <ul>
            <li><NavLink to="/profile">profile</NavLink></li>
            <li><NavLink to="/dialogs">dialogs</NavLink></li>
            <li><NavLink to="/users">users</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}