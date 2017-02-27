import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { secondaryColor } from 'shared/colors'
import { Container, Flexbox, ListUnstyled } from 'components/Layout'

const Wrapper = styled.div`
  background-color: ${secondaryColor};
  padding: 24px 0;
`

const Logo = styled.img`
  height: 50px;
`

const NavList = styled(ListUnstyled)`
  margin-left: auto;
  align-self: center;
  margin-bottom: 0;
`

const NavListItem = styled.li`
  display: inline-block;
  margin-bottom: 0;
  font-size: 21px;

  & + & {
    margin-left: 1.5em;
  }
`

const NavLink = props => (
  <NavListItem>
    <Link {...props} activeClassName="active" />
  </NavListItem>
)

export default function Nav(props) {
  return (
    <Wrapper>
      <Container>
        <Flexbox>
          <Link to="/">
            <Logo src="/assets/logo.svg" />
          </Link>
          <NavList>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/cinemas">Cinemas</NavLink>
            <NavLink to="/login">Logout</NavLink>
          </NavList>
        </Flexbox>
      </Container>
    </Wrapper>
  )
}
