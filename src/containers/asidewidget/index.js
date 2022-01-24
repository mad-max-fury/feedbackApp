import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import CategoryWidget from '../../components/categorywidget';
import ConnectBtn from '../../components/ConnectBtn';
import RoadMap from '../../components/roadmap';

const AsideWidget = () => {
  return <AsideWidgetWrap>
    <div className='bigScreen'>
      <div className='flex-col'>
        <div className='login'>
          <ConnectBtn text={'Login'} />
        </div>
        <Banner style={{
          backgroundImage: `url("/images/bgH.png")`
        }}>
          <span>
            <h1>Frontend Mentor</h1>
            <span>Feedback Board</span>
          </span>
        </Banner>
      </div>
      <CategoryWidget />
      <RoadMap />
    </div>
    <div style={{
      backgroundImage: `url("/images/bgH.png")`
      , backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      padding: '1rem'
    }} className='smallScreen'>
      <Banner style={{
        width: 'unset',
        height: 'fit-content',
        padding: 'unset',
        borderRadius: 'unset'
      }}>
        <span>
          <h1>Frontend Mentor</h1>
          <span>Feedback Board</span>
        </span>
      </Banner>
      <i className="fas fa-bars fa-3x" style={{ color: '#fff' }}></i>
      <div style={{ display: 'none' }}>
        <div className='flex-col'>
          <div className='login'>
            <ConnectBtn text={'Login'} />
          </div>
        </div>
        <CategoryWidget />
        <RoadMap />
      </div>

    </div>
  </AsideWidgetWrap>;
};

export default AsideWidget;


const AsideWidgetWrap = styled.aside`

  @media screen and (max-width:769px){
    width:100vw;
    // border:1px solid green;
  }
.bigScreen{
  display:flex;
  flex-direction:column;
  gap:1.5rem;
  @media screen and (max-width:769px){
    display:none;
  }
 @media screen and (max-width:939px) and (min-width:771px){
   flex-direction:row;
   width:80w;
  }
  .flex-col{
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    //  @media screen and (max-width:771px){
    //    flex-direction:row;
    //  }
  }
  .login{
    border-radius:10px;
    padding:20px;
    background:#fff;
  }

}
.smallScreen{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 1rem;
  height:fit-content;
  // border:1px solid red;
  @media screen and (min-width:770px){
    // border:1px solid green;
    display:none;


  }
}

`

const Banner = styled.div`
 width:208px;
 height:6rem;
 padding:20px;
 border-radius:10px;

 background:contain no-repeat;
 display:flex;
 justify-content:space-between;
 & > span{
   display:flex;
   flex-flow:column;
   margin-top:20%;
    @media screen and (max-width:939px) and (min-width:771px){
      margin-top:0;
    }
    @media screen and (max-width:700px){
      margin-top:0;
      gap:0rem;
    }
   gap:.4rem;
   h1,span{
     margin:0;
     color:${colors.white}
   }
   span{
     font-weight:bold;
     color:#d7d8fc;
   }
 }
 @media screen and (max-width:939px) and (min-width:771px){
  height:3rem;
  }

`