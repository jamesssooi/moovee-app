import React from 'react'

export const Row = (props) => {
  return (
    <div
      {...props}
      className={`row${props.className ? ` ${props.className}` : ''}`}
    >
      {props.children}
    </div>
  )
}

export const Column = (props) => {
  const columnProps = [
    'column',
    props.width !== undefined ? `column-${props.width}` : null,
    props.offset !== undefined ? `column-offset-${props.offset}` : null,
    props.className !== undefined ? props.className : null
  ]

  return (
    <div {...props} className={columnProps.filter(val => val !== null).join(' ')}>
      {props.children}
    </div>
  )
}
