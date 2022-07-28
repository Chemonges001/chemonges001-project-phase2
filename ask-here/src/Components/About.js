import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about-page'>
        <p id='about-text'> AsKit is a social platfrom that connects users with any type of question all over the world. Whatever question you have, AsKit and you'll get answers in an instant.</p>
        < Link to = '/'>Back</Link>
    </div>
  )
}

export default About