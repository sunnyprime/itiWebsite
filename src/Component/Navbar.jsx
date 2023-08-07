import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  float: left;
  height: 70px;
  background: #fff url(../images/headerBg.jpg) no-repeat right top;
`;

const Logo = styled.div`
  float: left;
`;

const MainMenu = styled.div`
  float: right;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #717171;
  }

  .active {
    font-weight: bold;
    color: #007bff;
  }
`;

const Navbar = () => {
  console.log("NavLink: ",NavLink);
  return (
    <HeaderContainer>
      <Logo>
        <NavLink exact to="/">
          <img src="http://www.spateliti.com/images/logo.png" alt="Sardar Patel Industrial Training Institute" />
        </NavLink>
      </Logo>
      <MainMenu>
        <ul>
          <li>
            <NavLink exact to="/"  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </MainMenu>
    </HeaderContainer>
  );
};

export default Navbar;
