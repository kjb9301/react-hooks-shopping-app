import React from 'react';
import styled from 'styled-components';

import ShoppingItem from 'components/main/ShoppingItem';

const ShoppingList = ({ shoppingList, handleDetail }) => {
  return (
    <Wrapper>
      {shoppingList.map((listItem) => {
        return (
          <ShoppingItem
            key={listItem.id}
            listItem={listItem}
            handleDetail={handleDetail}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(auto, auto);
  overflow: hidden scroll;
`;

export default ShoppingList;
