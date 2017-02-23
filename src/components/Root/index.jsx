import React from 'react'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default function Root(props) {
  return (
    <div>
      <Nav />
      { props.children }
      <Footer />
    </div>
  )
}
