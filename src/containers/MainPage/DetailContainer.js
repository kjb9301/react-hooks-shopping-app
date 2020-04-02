import React, { PureComponent } from 'react';
import ShoppingDetail from 'components/main/ShoppingDetail';

class DetailContainer extends PureComponent {
  state = { selectedOption: ''}

  HandleChangeOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render() {
    const { detailData, checkBasket, addToBasket } = this.props;
    const { selectedOption } = this.state;
    const { HandleChangeOption } = this;

    return (
      <ShoppingDetail
        detailData={detailData}
        selectedOption={selectedOption}
        checkBasket={checkBasket}
        addToBasket={addToBasket}
        HandleChangeOption={HandleChangeOption}
      />
    );
  }
}

export default DetailContainer;