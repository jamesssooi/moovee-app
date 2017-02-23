import React from 'react'

export const Container = (props) => {
  return (
    <div
      {...props}
      className={`container${props.className ? ` ${props.className}` : ''}`}
    >
      {props.children}
    </div>
  )
}
