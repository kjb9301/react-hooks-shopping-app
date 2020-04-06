import React from 'react';
import styled from 'styled-components';
// import './ShoppingItem.scss';

const ShoppingItem = ({ listItem, handleDetail }) => {
  return (
    <Wrapper className='item-wrapper'>
      <div className='item-box' onClick={() => handleDetail(listItem)}>
        <div className='item-top'>
          <img src={listItem.img} alt={listItem.name} />
        </div>
        <div className='item-bottom'>
          <div className='item-name'>{listItem.name}</div>
          <div className='item-provider'>판매자 :{listItem.provider}</div>
          <div className='item-price'>가격:{listItem.price}원</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  .item-box {
    display: flex;
    flex-direction: column;
    margin: 10%;
    width: 70%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }

    .item-top {
      flex: 3;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .item-bottom {
      flex: 1;
      padding: 15px;
      display: flex;
      flex-direction: column;

      .item-name {
        flex: 2;
        border-bottom: 1px solid gray;
        line-height: 3rem;
        font-size: 30px;
        font-weight: bold;
      }

      @media (max-width: 1360px) {
        .item-name {
          font-size: 12px;
          line-height: 1rem;
        }
      }

      div {
        padding: 15px;
        font-size: 25px;
      }

      @media (max-width: 1360px) {
        div {
          padding: 8px;
          font-size: 10px;
        }
      }
    }
  }
`;

export default ShoppingItem;
