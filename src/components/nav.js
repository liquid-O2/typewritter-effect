import { Link } from 'gatsby'
import React from 'react'

const Nav = () => {
  return (
    <header>
      <Link to='/new'>New Page</Link>
      <h4>Division Prototype</h4>
      <Link to='/'>Home</Link>
    </header>
  )
}

export default Nav