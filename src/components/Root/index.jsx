import React from 'react'
import Nav from 'components/Nav'

export default function Root(props) {
  return (
    <div>
      <Nav />
      { props.children }
    </div>
  )
}
