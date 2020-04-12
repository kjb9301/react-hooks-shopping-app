import React, { useContext } from 'react';
import styled from 'styled-components';

import ShoppingItem from 'components/main/ShoppingItem';
import { GlobalStateContext } from 'contexts/ProductContext';

const ShoppingList = ({ shoppingList, handleDetail }) => {
  const productList = useContext(GlobalStateContext).productList;
  if (!productList) return null;
  return (
    <>
      {productList.map((listItem) => {
        return (
          <ShoppingItem
            key={listItem.id}
            listItem={listItem}
            handleDetail={handleDetail}
          />
        );
      })}
    </>
  );
};

const Wrapper = styled.section`
  /* display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(auto, auto);
  overflow: hidden scroll;
  border: 1px solid green; */
`;

export default ShoppingList;
