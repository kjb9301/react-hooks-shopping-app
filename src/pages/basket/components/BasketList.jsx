import React, { useContext } from 'react';

import { GlobalStateContext } from 'contexts/ProductContext';

function BasketList() {
  const basketList = useContext(GlobalStateContext);
  console.log(basketList);
  return <div></div>;
}

export default BasketList;
