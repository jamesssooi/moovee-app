import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Container, Row, Column, ListUnstyled } from 'components/Layout'
import FAIcon from 'components/FAIcon'
import { textColor } from 'shared/colors'

const Wrapper = styled.div`
  background-color: ${textColor}
  padding-top: 28px;
  padding-bottom: 28px;
  color: rgb(145, 140, 140);
`

const FooterTitle = styled.span`
  height: 50px;
  display: block;
  padding-top: 12px;
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`

const Logo = styled.img`
  height: 50px;
  display: block;
  margin-bottom: 20px;
`

const NavList = styled(ListUnstyled)`
  margin-bottom: 0;
`

const NavListItem = styled.li`
  margin-bottom: 0;
  
  & > a {
    color: rgb(145, 140, 140);
  }

  & > a:hover {
    color: white;
  }
`

const CopyrightInfo = styled.span`
  display: block;
  margin: 16px 0 0;
  text-align: center;
  font-size: 12px;
  color: rgb(115, 110, 110);
`

const NavLink = props => (
  <NavListItem>
    <Link {...props} />
  </NavListItem>
)

const ConnectIcon = styled(FAIcon)`
  color: rgb(145, 140, 140);
  font-size: 24px;

  & + & {
    margin-left: 6px;
  }
`

const ContactItem = styled.span`
  display: block;
`

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column>
            <Logo src="/assets/logo.svg" alt="Moovee" />
            <NavList>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/terms">Terms and Conditions</NavLink>
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </NavList>
          </Column>

          <Column>
            <FooterTitle>Let&#8217;s Connect!</FooterTitle>
            <ConnectIcon icon="facebook-square" href="https://facebook.com" />
            <ConnectIcon icon="instagram" href="https://instagram.com" />
            <ConnectIcon icon="youtube-square" href="https://youtube.com" />
          </Column>

          <Column>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactItem>05-3031234</ContactItem>
            <ContactItem>info@moovee.my</ContactItem>
          </Column>
        </Row>

        <CopyrightInfo>
          Copyright &copy; 2017 moovee.my. All rights reserved.
        </CopyrightInfo>
      </Container>
    </Wrapper>
  )
}
