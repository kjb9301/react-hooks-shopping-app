import React from 'react';
import './PayList.scss';
import PayItem from 'components/basket/PayItem';

const PayList = ({payList, changeCount, deleteInPayList}) => {
  let totalPrice = 0;
  const payItems = payList.map((payItem) => {
    totalPrice += payItem.price * payItem.count + payItem.shipping.price;
    const id_Op = `${payItem.id}_${payItem.options.id}`;
    return (
      <PayItem
        key={id_Op}
        id_Op={id_Op}
        payItem={payItem}
        changeCount={changeCount}
        deleteInPayList={deleteInPayList}
      />
    )
  })

  return (
    <div className="pay-list-wrapper">
      <div className="pay-header"><span>결제리스트</span></div>
      <div className="pay-section">
        <div className="pay-text">
          <div className="pay-text-x"></div>
          <div className="pay-text-name">상품명</div>
          <div className="pay-text-provider">판매자</div>
          <div className="pay-text-option">선택옵션</div>
          <div className="pay-text-count">수량</div>
          <div className="pay-text-price">금액</div>
          <div className="pay-text-ship-price">배송비</div>
        </div>
        <div className="pay-content">{payItems}</div>
      </div>
      <div className="pay-footer">
        <div className="pay-total"><span>{totalPrice}원</span></div>
        <div className="pay-btn">
          <button>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default PayList;