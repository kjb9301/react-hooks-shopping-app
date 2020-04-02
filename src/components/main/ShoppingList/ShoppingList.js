import React from 'react';
import './ShoppingList.scss';
import ShoppingItem from 'components/main/ShoppingItem'

const ShoppingList = ({shoppingList,handleDetail}) => {
  const listItems = shoppingList.map((listItem) => {
    return (
      <ShoppingItem
        key={listItem.id}
        listItem={listItem}
        handleDetail={handleDetail}
      />
    )
  })

  return (
    <div className="shopping-list-wrapper">
      {listItems}
    </div>
  );
};

export default ShoppingList;