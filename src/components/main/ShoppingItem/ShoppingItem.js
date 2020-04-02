import React from 'react';
import './ShoppingItem.scss';

const ShoppingItem = ({listItem,handleDetail}) => {
  return (
    <div className="item-wrapper">
      <div className="item-box" onClick={() => handleDetail(listItem)}>
        <div className="item-top">
          <img src={listItem.img} alt={listItem.name}/>
        </div>
        <div className="item-bottom">
          <div className="item-name">{listItem.name}</div>
          <div className="item-provider">판매자 :{listItem.provider}</div>
          <div className="item-price">가격:{listItem.price}원</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;