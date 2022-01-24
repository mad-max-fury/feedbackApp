import React from 'react';
import styled from 'styled-components';
import AsideWidget from '../../containers/asidewidget';
import Feedback from '../../containers/feedback/Feedback';
import Widget from '../../containers/widget';

const Home = () => {
  return <HomeWrapper>
    <div>
      <AsideWidget />
    </div>
    <div>
      <Widget />
      <div className='feedContainer'>
        {
          ['a', 'a', 1, 3, 3, 7].map(el => {
            return <Feedback />
          })
        }
      </div>
    </div>
  </HomeWrapper>;
};

export default Home;


const HomeWrapper = styled.div`
 display:flex;
 max-width:1200px;
 margin: 5rem auto 0 auto;
 gap:2rem;
 

 .feedContainer{
   margin-top:1rem;
   display:flex;
   flex-direction:column;
   gap:1rem;
 }
  @media (max-width:700px){
   flex-direction:column;
   padding: 0 2rem;
   margin:0;
   width:100vw;
   border:1px solid yellow;
 }
`