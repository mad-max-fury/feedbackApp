import React from 'react';
import styled from 'styled-components';
import AsideWidget from '../../containers/asidewidget';
import Feedback from '../../containers/feedback/Feedback';
import Widget from '../../containers/widget';
import { motion } from 'framer-motion';
const Home = () => {
  return <HomeWrapper as={motion.div} initial={{ scale: 0 }} transition={{ delay: .1, type: 'spring', duration: .5 }} animate={{ scale: 1 }}>
    <div>
      <AsideWidget />
    </div>
    <div>
      <Widget />
      <motion.div className='feedContainer' initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ delay: .5, type: 'tween', duration: 1 }}>
        {
          ['a', 'a', 1, 3, 3, 7].map(el => {
            return <Feedback key={Math.random()} />
          })
        }
      </motion.div>
    </div>
  </HomeWrapper >;
};

export default Home;


const HomeWrapper = styled(motion.div)`
 display:flex;
 max-width:1200px;
 margin: 5rem auto 0 auto;
 gap:2rem;
 padding-bottom:2rem;

 
   @media (max-width:939px){
   flex-direction:column;
   margin:auto;
   width:100%;
  }
  @media screen and (max-width:770px){
    gap:0;
  }

 .feedContainer{
   margin-top:1rem;
   display:flex;
   flex-direction:column;
   gap:1rem;
 }
 & > div{
   &:first-of-type{
      @media screen and (max-width:939px) and (min-width:771px){
      //  border:1px solid black;
       display:flex;
       align-items:center;
       justify-content:center;
       padding-top:2rem;

      }
   }
   
 }

`