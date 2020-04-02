import React from 'react';
import './PayItem.scss';

const PayItem = ({id_Op, payItem, changeCount, deleteInPayList}) => {
  return (
    <div className="pay-box">
      <div className="pay-x" onClick={() => deleteInPayList(payItem.id,payItem.options.id)}>&times;</div>
      <div className="pay-name">{payItem.name}</div>
      <div className="pay-provider">{payItem.provider}</div>
      <div className="pay-option">{`${payItem.options.color} / ${payItem.options.size}`}</div>
      <div className="pay-count">
        <input type="number" name={id_Op} min="1" max={payItem.options.stock} defaultValue={payItem.count} onChange={changeCount}/>
      </div>
      <div className="pay-price">{payItem.price}원</div>
      <div className="pay-ship-price">{payItem.shipping.price}원</div>
    </div>
  )
}

export default PayItem;