import React, { Component } from 'react';
import ListContainer from 'containers/MainPage/ListContainer';
import DetailContainer from 'containers/MainPage/DetailContainer';
import axios from 'axios';
import img from 'images/item.png';

class HomeContainer extends Component {
  state = {
    shoppingData: [],
    basketData: [],
    detailData: ''
  }

  initialSet(){
    axios.get('dummy/goods.json')
      .then((obj) => {
        const goods = obj.data.goods.map((good) => good = {...good, img})
        localStorage.shoppingData = JSON.stringify(goods);
      })
      .then(() => {
        const data = JSON.parse(localStorage.getItem("shoppingData"));
        this.setState({
          shoppingData: data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDetail = (listItem) => {
    this.setState({
      detailData: listItem
    })
  }

  addToBasket = (info) => {
    const { id, selectedOption } = info;
    const { shoppingData } = this.state;

    const index = shoppingData.findIndex((data) => data.id === id );
    const selectedData = {...shoppingData[index]};
    const optionIdx = selectedData.options.findIndex((value) => value.id === Number(selectedOption));
    const option = selectedData.options[optionIdx];
    selectedData.options = option;
    
    this.setState((prevState) => ({
      basketData: prevState.basketData.concat(selectedData),
      detailData: ''
    }))
    alert("해당 상품을 장바구니에 추가하였습니다");
  }

  checkBasket = (info) => {
    const { id, selectedOption } = info;
    const { basketData } = this.state;

    if(!selectedOption) return alert("옵션을 선택해 주십시오.");

    const checkTF = basketData.some((item) => (item.id === id && item.options.id === Number(selectedOption)));
    if(checkTF){
      alert("이미 장바구니에 담겨져 있습니다.");
    }else{
      this.addToBasket(info);
    }
  }

  componentDidUpdate(prevProps,prevState){
    localStorage.basketData = JSON.stringify(this.state.basketData);
  }

  componentDidMount(){
    if(!localStorage.shoppingData){
      this.initialSet();
    }else{
      this.setState({
        shoppingData: JSON.parse(localStorage.getItem("shoppingData")),
      })
      if(localStorage.basketData){
        this.setState({
          basketData: JSON.parse(localStorage.getItem("basketData")),
        })
      }
    }
  }

  render() {
    const { shoppingData, detailData } = this.state;
    const { handleDetail, addToBasket, checkBasket } = this;

    return (
      <>
        <ListContainer
          shoppingList={shoppingData}
          handleDetail={handleDetail}
        />
        <DetailContainer
          detailData={detailData}
          checkBasket={checkBasket}
          addToBasket={addToBasket}
        />
      </>
    );
  }
}

export default HomeContainer;