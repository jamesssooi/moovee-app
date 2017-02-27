import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'

const ButtonBase = css`
  line-height: 1;
  font-size: 14px;
  padding: 12px 24px;
  height: auto;

  ${props => (props.block ? 'display: block;' : '')}
  ${props => (props.width ? `width: ${props.width};` : '')}
`

const ButtonButton = styled.button`
  ${ButtonBase}
`

const LinkButton = styled.a`
  ${ButtonBase}
`

export const Button = (props) => {
  const buttonProps = [
    'button',
    props.className ? props.className : null,
    props.outlined ? 'button-outline' : null,
    props.borderless ? 'button-clear' : null
  ]

  let ButtonTag = null
  ButtonTag = props.link ? LinkButton : ButtonButton

  return (
    <ButtonTag
      {...props}
      className={buttonProps.filter(val => val !== null).join(' ')}
    >
      {props.children}
    </ButtonTag>
  )
}
