import React from 'react'
import styled from 'styled-components'

export const DescriptiveList = styled.div`
  & + & {
    margin-top: 36px;
  }
`

export const DescriptiveItem = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 12px;
    margin-bottom: 12px;
  `

export const DescriptiveLabel = styled.span`
text-transform: uppercase;
letter-spacing: 1px;
font-weight: bold;
font-size: 14px;
`

export const DescriptiveValue = styled.span`
  margin-left: auto;
`

export const Descriptive = (props) => {
  return (
    <DescriptiveItem>
      <DescriptiveLabel>{props.label}</DescriptiveLabel>
      <DescriptiveValue>{props.children}</DescriptiveValue>
    </DescriptiveItem>
  )
}
