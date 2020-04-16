import React from 'react';
import styled from 'styled-components';

function PayTableHeader() {
  return (
    <Wrapper>
      <div className='pay-text-x'></div>
      <div className='pay-text-name'>상품명</div>
      <div className='pay-text-provider'>판매자</div>
      <div className='pay-text-option'>선택옵션</div>
      <div className='pay-text-count'>수량</div>
      <div className='pay-text-price'>금액</div>
      <div className='pay-text-ship-price'>배송비</div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default PayTableHeader;
