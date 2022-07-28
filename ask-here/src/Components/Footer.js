import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        <Link to='/about'>About</Link>{'   '}
        <Link to = '/questions'>Questions</Link>

    </footer>
  )
}

export default Footer