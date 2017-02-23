import React from 'react'

export default function FAIcon(props) {
  const iconClassName = [
    'fa',
    `fa-${props.icon}`,
    props.modifiers
  ].filter(val => val !== null).join(' ')

  let el = null
  if (!props.href) {
    el = <i className={`${iconClassName} ${props.className}`} />
  } else {
    el = (
      <a href={props.href} className={props.className}>
        <i className={iconClassName} />
      </a>
    )
  }

  return el
}

FAIcon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  modifiers: React.PropTypes.string,
  href: React.PropTypes.string
}

FAIcon.defaultProps = {
  modifiers: null,
  href: null
}
