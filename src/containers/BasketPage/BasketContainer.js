import React, { Component } from 'react';
import BasketList from 'components/basket/BasketList';

class BasketContainer extends Component {

  shouldComponentUpdate(nextProps,nextState){
    return this.props.basketList !== nextProps.basketList;
  }

  render() {
    const { basketList, addToOrder, deleteInBasket } = this.props;
    return (
      <BasketList
        basketList={basketList}
        addToOrder={addToOrder}
        deleteInBasket={deleteInBasket}
      />
    );
  }
}

export default BasketContainer;