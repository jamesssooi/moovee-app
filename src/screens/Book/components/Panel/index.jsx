import React from 'react'
import styled from 'styled-components'
import { brandColor, secondaryColor } from 'shared/colors'

export const Panel = styled.div`
  width: 480px;
  margin: 0 auto;
  background-color: ${secondaryColor};
  color: white;
  padding: 30px;
`

export const PanelTitle = styled.span`
  font-weight: bold;
  font-size: 32px;
  display: block;
  color: ${brandColor};
  text-align: center;
  margin-bottom: 24px;
`

export const PanelSubtitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
  margin-bottom: 1em;
`