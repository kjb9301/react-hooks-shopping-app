import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  return (
    <Wrapper>
      <Menu>
        <Item>
          <Link to='/'>상품목록</Link>
        </Item>
        <Item>
          <Link to='/basket'>장바구니</Link>
        </Item>
      </Menu>
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

const Menu = styled.ul`
  width: 100%;
  padding-left: 5%;
  display: flex;
`;

const Item = styled.li`
  font-size: 2rem;
  line-height: 5rem;
  list-style: none;
  padding: 0 20px 0 20px;
  font-weight: bolder;
  color: #ccc;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 0 rgb(107, 106, 106);
  }

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
      color: rgb(107, 106, 106);
    }
  }

  @media (max-width: 1360px) {
    font-size: 1rem;
    line-height: 3rem;

    &:hover {
      box-shadow: 0 2px 0 rgb(107, 106, 106);
    }
  }
`;

export default Nav;
