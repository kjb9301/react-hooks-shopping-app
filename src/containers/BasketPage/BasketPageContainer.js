import React, { Component } from 'react';
import BasketContainer from 'containers/BasketPage/BasketContainer';
import PayContainer from 'containers/BasketPage/PayContainer';

class BasketPageContainer extends Component {

  state = {
    basketList: [],
    payList: []
  }

  addToOrder = (id,opId) => {
    const { basketList } = this.state;
    const newPayList = basketList.map(item => item = {...item, count:1})
                                  .filter(item => {
                                    return (item.id === id && item.options.id === opId)});

    const newBasketList = basketList.filter(item => {
                                      return (item.id !== id || (item.id === id && item.options.id !== opId))});
    
    this.setState((prevState) => ({
      payList: prevState.payList.concat(newPayList),
      basketList: newBasketList
    }))
  }

  deleteInBasket = (id,opId) => {
    const { basketList } = this.state;
    const newBasketList = basketList.filter(item => {
                                      return (item.id !== id ||  (item.id === id && item.options.id !== opId))
                                    });
    this.setState({
      basketList: newBasketList
    })
  }

  deleteInPayList = (id,opId) => {
    const { payList } = this.state;
    const newPayList = payList.filter(item => {
                                return (item.id !== id || (item.id === id && item.options.id !== opId))
                              });
    const newBasketList = payList.filter(item => {
                                    return (item.id === id && item.options.id === opId)
                                  })
    this.setState((prevState) => ({
      payList: newPayList,
      basketList: prevState.basketList.concat(newBasketList)
    }))
  }

  changeCount = (e) => {
    const { name, value, max } = e.target;
    if(Number(value) > max){
      alert("더 이상 재고가 없습니다.");
      return;
    }
    
    const id = Number(name.split("_")[0]);
    const opId = Number(name.split("_")[1]);

    const { payList } = this.state;
    const index = payList.findIndex(item => item.id === id && item.options.id === opId);
    const newItem = {...payList[index]};
    newItem.count = Number(value);

    const newPayList = [
      ...payList.slice(0, index),
      newItem,
      ...payList.slice(index+1, payList.length)
    ];

    this.setState({
      payList : newPayList
    })
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.basketList !== prevState.basketList){
      localStorage.basketData = JSON.stringify(this.state.basketList);
    }
  }

  componentDidMount(){
    this.setState({
      basketList: JSON.parse(localStorage.getItem("basketData"))
    })
  }

  render() {
    const { basketList, payList } = this.state;
    const { addToOrder, deleteInBasket, deleteInPayList, changeCount } = this;

    return (
      <>
        <BasketContainer
          basketList={basketList}
          addToOrder={addToOrder}
          deleteInBasket={deleteInBasket}
        />
        <PayContainer
          payList={payList}
          changeCount={changeCount}
          deleteInPayList={deleteInPayList}
        />
      </>
    );
  }
}

export default BasketPageContainer;