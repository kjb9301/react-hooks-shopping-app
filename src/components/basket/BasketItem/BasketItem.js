import React from 'react';
import './BasketItem.scss';

const BasketItem = ({basketItem, addToOrder, deleteInBasket}) => {
  return (
    <div className="item-box">
      <div className="item-img">
        <div className="img"><img src={basketItem.img} alt={basketItem.name}/></div>
      </div>
      <div className="item-name">{basketItem.name}</div>
      <div className="item-provider">{basketItem.provider}</div>
      <div className="item-option">{`${basketItem.options.color} / ${basketItem.options.size}`}</div>
      <div className="item-price">{basketItem.price}원</div>
      <div className="item-ship-price">{basketItem.shipping.price}원</div>
      <div className="item-btn">
        <div className="btn-order"><button onClick={() => addToOrder(basketItem.id,basketItem.options.id)}>주문</button></div>
        <div className="btn-delete"><button onClick={() => deleteInBasket(basketItem.id,basketItem.options.id)}>삭제</button></div>
      </div>
    </div>
  )
}

export default BasketItem;