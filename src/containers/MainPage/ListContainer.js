import React, { Component } from 'react';
import ShoppingList from 'components/main/ShoppingList';

class ListContainer extends Component {

  shouldComponentUpdate(nextProps,nextState){
    return this.props.shoppingList !== nextProps.shoppingList;
  }

  render() {
    const { shoppingList,handleDetail } = this.props;
    return (
      <ShoppingList
        shoppingList={shoppingList}
        handleDetail={handleDetail}
      />
    );
  }
}

export default ListContainer;