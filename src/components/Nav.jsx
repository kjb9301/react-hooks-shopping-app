import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navInfo = [
  { path: '/', menu: '상품목록' },
  { path: '/cart', menu: '장바구니' },
];

function Nav() {
  const location = useLocation();
  return (
    <Wrapper>
      <NavBar>
        {navInfo.map((info, index) => {
          return (
            <Menu
              key={`menu-${index}`}
              className={location.pathname === info.path ? 'selected' : ''}
            >
              <Link to={info.path}>{info.menu}</Link>
            </Menu>
          );
        })}
      </NavBar>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
  background-color: rgb(230, 227, 224);
  border-radius: 8px;
  padding: 0 20px;
  margin-bottom: 40px;

  @media (max-width: 1360px) {
    height: 70px;
    margin-bottom: 20px;
  }
`;

const NavBar = styled.ul`
  width: 100%;
  padding-left: 5%;
  display: flex;

  .selected {
    box-shadow: 0 3px 0 rgb(107, 106, 106);
  }

  @media (max-width: 1360px) {
    .selected {
      box-shadow: 0 2px 0 rgb(107, 106, 106);
    }
  }
`;

const Menu = styled.li`
  font-size: 1.5rem;
  line-height: 4rem;
  list-style: none;
  padding: 0 30px;
  font-weight: bolder;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1360px) {
    font-size: 1rem;
    line-height: 2.5rem;
    padding: 0 20px;
  }
`;

export default Nav;
