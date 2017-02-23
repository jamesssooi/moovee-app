import styled from 'styled-components'

export const Flexbox = styled.div`
  display: flex;
  ${props => (
      props.flexDirection
       ? `flex-direction: ${props.flexDirection}`
       : null
  )}

  ${props => (
      props.flexWrap
       ? `flex-wrap: ${props.flexWrap}`
       : null
  )}

  ${props => (
      props.justifyContent
       ? `justify-content: ${props.justifyContent}`
       : null
  )}

  ${props => (
      props.alignItems
       ? `align-items: ${props.alignItems}`
       : null
  )}
`
