import React from 'react';
import styled from 'styled-components';
import ConnectBtn from '../../components/ConnectBtn';
import HeadingRoadMap from '../../components/heading';
import Inprogress from '../../components/inprogress';
import Live from '../../components/live';
import Planned from '../../components/planned';
import RoadMapCard from '../../components/roadmapcard';
import Tabs from '../../components/tab';

const RoadMapInnerPage = () => {
  const tabs = [
    {
      name: "Planned",
      content: <Planned />,
    },
    {
      name: "In-Progress",
      content: <Inprogress />,
    },
    {
      name: "Live",
      content: <Live />,
    }
  ];
  return <RoadMapInnerPageWrapper>
    <WidgetWrapper>
      <div>
        <span>
          <span><i className="fas fa-long-arrow-alt-left"></i></span>
          <span>Go Back</span>
        </span>
        <span>RoadMap</span>
      </div>
      <div className='btnWrap'>
        <ConnectBtn text={'+ Add Feedback'} />
      </div>
    </WidgetWrapper>
    <Main>
      <Planned />
      <Inprogress />
      <Live />
    </Main>
    <Tabnav>
      <Tabs tabs={tabs} />
    </Tabnav>

  </RoadMapInnerPageWrapper>
};

export default RoadMapInnerPage;


const RoadMapInnerPageWrapper = styled.main`
 display:flex;
 flex-direction:column;
 max-width:1200px;
 margin: 5rem auto 0 auto;
 gap:2rem;
 padding-bottom:2rem;
//  border:1px solid red;
   @media (max-width:939px){
   flex-direction:column;
   margin:auto;
   width:100%;
  }
  @media screen and (max-width:770px){
    gap:0;
  }
  
`
const WidgetWrapper = styled.div`
 width:70vw;
 height:fit-content;
 padding:0.5rem 1rem;
 background-color:#373F68;
 margin:auto;
 display:flex;
 gap:1rem;
 border-radius:10px;
 justify-content:space-between;
 color:#fff;
   @media screen and (max-width:770px){
    width:100vw !important;
     border-radius:0px;
      padding:0.5rem 0;
       justify-content:space-around;
    
   }
   & > div {
     display:flex;
     flex-direction:column;
     gap:1rem;
     font-size:18px;
     font-weight:bold;
     align-items:center;
     & > span:first-of-type{
       display:flex;
       gap:1rem;
       font-size:13px;
      
     }
   }
   .btnWrap{
      display:flex;
      align-items:center;
      & > div{
        @media screen and (max-width:450px){
          width:fit-content;
          padding:0 .7rem;
        }
      }
    }
 
  
`
const Main = styled.main`
     @media screen and (max-width:768px){
      display:none;
     }
     display:flex;
     justify-content:space-between;
    .cWrap{
      display:flex;
      flex-direction:column;
      gap:2rem;
    }
`
const Tabnav = styled.nav`
 @media screen and (min-width:768px){
   display:none;
 }
   .cWrap{
      display:flex;
      flex-direction:column;
      gap:2rem;
    }
`