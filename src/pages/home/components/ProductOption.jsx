import React from 'react';
import styled from 'styled-components';

function ProductOption({ product, onChangeOption }) {
  return (
    <select onChange={onChangeOption}>
      <option value=''>--옵션선택--</option>
      {product.options.map((option, index) => {
        return (
          <option
            key={index}
            value={option.id}
          >{`${option.color} / ${option.size}`}</option>
        );
      })}
    </select>
  );
}

export default ProductOption;
