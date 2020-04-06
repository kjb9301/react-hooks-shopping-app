import React, { useState } from 'react';
import ShoppingDetail from 'components/main/ShoppingDetail';

function DetailContainer() {
  const [selectedOption, setOption] = useState('');
  const handleChangeOption = (e) => {
    setOption(e.target.value);
  };
  return <ShoppingDetail onChangeOption={handleChangeOption} />;
}

export default DetailContainer;
