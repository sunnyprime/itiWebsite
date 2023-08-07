import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  float: left;
  height: 36px;
  cursor: default;
  background: #007bff; /* Updated background color (blue) */
  line-height: 36px;
  color: #fff; /* Updated text color (white) */
`;

const ContactNow = styled.div`
  float: right;
  & a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f00;
    }
  }
`;

const ResponsiveHeaderContainer = styled(HeaderContainer)`
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
    text-align: center; /* Center the content at mobile view */
    & .contactNow {
      float: none;
      margin-top: 10px;
    }
  }
`;

const Header = () => {
  return (
    <ResponsiveHeaderContainer>
      <ContactNow>
        Contact now : +91 9334512804 [<a href="mailto:info@spateliti.com" target="_blank">info@spateliti.com</a>]
      </ContactNow>
    </ResponsiveHeaderContainer>
  );
};

export default Header;
