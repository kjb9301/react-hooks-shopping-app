import React, { Component } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {

  shouldComponentUpdate(nextProps,nextState){
    return this.props.payList !== nextProps.payList;
  }

  render() {
    const { payList, changeCount, deleteInPayList } = this.props;
    return (
      <PayList
        payList={payList}
        changeCount={changeCount}
        deleteInPayList={deleteInPayList}
      />
    );
  }
}

export default PayContainer;