import React from 'react';
import './BasketList.scss';
import BasketItem from 'components/basket/BasketItem';

const BasketList = ({basketList, addToOrder, deleteInBasket}) => {
  const basketItems = (basketList||[]).map((basketItem) => {
    const id_Op = `${basketItem}_${basketItem.options.id}`;
    return (
      <BasketItem
        key={id_Op}
        basketItem={basketItem}
        addToOrder={addToOrder}
        deleteInBasket={deleteInBasket}
      />
    )
  })
  
  return (
    <div className="basket-list-wrapper">
      <div className="basket-list-box">
        <div className="basket-header">
          <div className="text-img"></div>
          <div className="text-name">상품명</div>
          <div className="text-provider">판매자</div>
          <div className="text-option">선택옵션</div>
          <div className="text-price">금액</div>
          <div className="text-ship-price">배송비</div>
          <div></div>
        </div>
        <div className="basket-content">
          {basketItems}
        </div>
      </div> 
    </div>
  );
};

export default BasketList;