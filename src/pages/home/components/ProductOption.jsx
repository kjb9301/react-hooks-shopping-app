import React from 'react';
import styled from 'styled-components';

function ProductOption({ options, onChangeOption }) {
  console.log(options);
  return (
    <Wrapper>
      <span>옵션 :</span>
      <Select onChange={onChangeOption}>
        <option value=''>--선택--</option>
        {options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.id}
            >{`${option.color} / ${option.size}`}</option>
          );
        })}
      </Select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 150px;
`;

export default ProductOption;
