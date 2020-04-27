import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navInfo = [
  { path: '/', menu: '상품목록' },
  { path: '/basket', menu: '장바구니' },
];

function Nav() {
  const location = useLocation();
  const match = useHistory();
  console.log(location);
  console.log(match);
  return (
    <Wrapper>
      <NavBar>
        {navInfo.map((info) => {
          return (
            <Menu>
              <NavLink
                to={info.path}
                activeClassName={
                  location.pathname === info.path ? 'selected' : ''
                }
              >
                {info.menu}
              </NavLink>
            </Menu>
          );
        })}
        {/* <Menu>
          <NavLink to='/' activeClassName='selected'>
            상품목록
          </NavLink>
        </Menu>
        <Menu>
          <NavLink to='/basket' activeClassName='selected'>
            장바구니
          </NavLink>
        </Menu> */}
      </NavBar>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
  background-color: rgb(230, 227, 224);
  border-radius: 8px;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const NavBar = styled.ul`
  width: 100%;
  padding-left: 5%;
  display: flex;
`;

const Menu = styled.li`
  font-size: 2rem;
  line-height: 5rem;
  list-style: none;
  padding: 0 20px 0 20px;
  font-weight: bolder;
  color: #ccc;
  margin-right: 10px;

  .selected {
    box-shadow: 0 3px 0 rgb(107, 106, 106);
  }

  &:hover {
    cursor: pointer;
    /* box-shadow: 0 3px 0 rgb(107, 106, 106); */
  }

  @media (max-width: 1360px) {
    font-size: 1rem;
    line-height: 3rem;

    .selected {
      box-shadow: 0 2px 0 rgb(107, 106, 106);
    }

    &:hover {
      /* box-shadow: 0 2px 0 rgb(107, 106, 106); */
    }
  }
`;

export default Nav;
