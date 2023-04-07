import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "./Profile";

const Header = () => {
  const user = useSelector((state) => state.user.value);
  const [showUser, setShowUser] = useState("");
  return (
    <Container>
      {!user && <Navigate to="/" />}
      <Content>
        <Logo>
          <a href="/feed">
            <img src="public/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="public/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavList>
            <NavItem className="active">
              <a>
                <img src="public/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src="public/images/nav-network.svg" alt="" />
                <span> My Network</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src="public/images/nav-jobs.svg" alt="" />
                <span> Jobs</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src="public/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavItem>
            <NavItem>
              <a>
                <img src="public/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavItem>
            <User onClick={() => setShowUser(!showUser)}>
              {user && user.photURL ? (
                <img src={user.photURL} alt="user" />
              ) : (
                <img src="public/images/user.svg" alt="" />
              )}

              <span>
                Me
                <img src="public/images/down-icon.svg " alt="" />
              </span>
              {showUser && <Profile />}
              {/* <SignOut>
                <a>sign out</a>
              </SignOut> */}
            </User>
            <Work>
              <a>
                <img src="public/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="public/images/down-icon.svg" alt="" />
                </span>
              </a>
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
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 16px;
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: flex;
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
export default Header;
