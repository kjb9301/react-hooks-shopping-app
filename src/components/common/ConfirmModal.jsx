import React from 'react';
import styled from 'styled-components';

function ConfirmModal() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='content'>
          <p>장바구니로 이동하시겠습니까?</p>
        </div>
        <div className='btn'>
          <button type='button'>확인</button>
          <button type='button'>취소</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  transform: translate(-50%, -50%);

  .container {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    .content {
      box-sizing: border-box;
      height: calc(100% - 50px);
      padding: 10px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 16px;
      }
    }

    .btn {
      min-height: 50px;
      position: absolute;
      border: 1px solid blue;
      bottom: 0;
      width: 100%;
      display: flex;

      button {
        flex: 1;
      }
    }
  }
`;

export default ConfirmModal;
