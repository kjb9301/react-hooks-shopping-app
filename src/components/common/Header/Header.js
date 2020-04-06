import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import './Header.scss';

const Header = () => {
  return (
    <Nav className='header'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/basket'>장바구니</Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  flex: 0.3;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
  background-color: rgb(230, 227, 224);
  border-radius: 20px;

  ul {
    margin: 0;
    padding-left: 5%;
    display: flex;

    li {
      font-size: 2rem;
      line-height: 5rem;
      list-style: none;
      padding: 0 20px 0 20px;
      font-weight: bolder;
      color: #ccc;

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
    }

    @media (max-width: 1360px) {
      li {
        font-size: 1rem;
        line-height: 3rem;

        &:hover {
          box-shadow: 0 2px 0 rgb(107, 106, 106);
        }
      }
    }
  }
`;

export default Header;
