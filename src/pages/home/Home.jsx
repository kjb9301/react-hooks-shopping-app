import React from 'react';
import Section from 'components/common/Section';
import Template from 'components/common/Section/Template';
// import HomeContainer from 'containers/MainPage/HomeContainer';
import HomeContainer from './components/HomeContainer';
import ListContainer from './components/ListContainer';
import DetailContainer from './components/DetailContainer';

function Home() {
  return (
    <Template>
      <ListContainer />
      {/* <DetailContainer /> */}
    </Template>
  );
}

export default Home;
