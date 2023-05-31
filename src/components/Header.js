import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "./Profile";
import  HomeLogo from '../images/home-logo.svg';
import Searchicon from '../images/search-icon.svg'
import homeimg from '../images/nav-home.svg';
import  Network from '../images/nav-network.svg';
import Jobs from '../images/nav-jobs.svg';
import Messaging from '../images/nav-messaging.svg'
import Notifications from '../images/nav-notifications.svg';
import users from '../images/user.svg';
import down from '../images/down-icon.svg';
import nav from '../images/nav-work.svg';

const Header = (props) => {
  const user = useSelector((state) => state.user.value);
  const [showUser, setShowUser] = useState("");
  return (
    <Container>
      {!user && (<Navigate to="/"/>)}
      <Content>
        <Logo>
          <a href="/user">
            <img src={HomeLogo} alt="logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={Searchicon} alt="search" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavList>
            <NavItem className="active">
              <a>
                <img src={homeimg} alt="home" />
                <span>Home</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src={Network} alt="My Network" />
                <span> My Network</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src={Jobs} alt="Jobs" />
                <span> Jobs</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src={Messaging} alt="Messaging" />
                <span>Messaging</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src={Notifications} alt="Notifications" />
                <span>Notifications</span>
              </a>
            </NavItem>

            {/* {console.log("line 59- " + user?.payload)} */}
            <User onClick={() => setShowUser(!showUser)}>
              {user && user.photURL ? (
                <img src={user.photURL} alt="user" />
              ) : (
                <img src={users} alt="user" />
              )}
              <span>
               Me
                <img src={down}/>
              </span>
              {showUser && <Profile />}
            </User>
            <Work>
              <img src={nav} alt="work" />
              <span>
                Work
                <img src={down} alt="" />
              </span>
            </Work>
          </NavList>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  max-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: white;
      border-radius: 2px;
      color: blue;
      width: 100%;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scale(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    justify-content: center;
    text-decoration: none;
    position: relative;
    min-height: 52px;
    min-width: 80px;
    span {
      align-items: center;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
    &:hover,
    &:active {
      a {
        span {
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;
const User = styled(NavList)`
  svg {
    width: 24px;
    border-radius: 50%;
  }
  img:first-of-type {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  img:last-child {
    width: fit-content;
    height: fit-content;
  }
  @media (max-width: 767px) {
    position: fixed;
    top: 5px;
    right: 0px;
  }
`;


const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  img:last-child {
    width: fit-content;
    height: fit-content;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export default Header;
