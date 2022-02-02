import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import Comments from '../../components/Comments';
import CreateFeed from '../../containers/createcomment';
import Feedback from '../../containers/feedback/Feedback';
const FeedBackDetails = () => {
  const handleBackClick = () => window.history.back()
  return <FeedBackDetailsWrapper>
    <BackButton onClick={handleBackClick}><span><i className="fas fa-long-arrow-alt-left"></i></span> <span>Go Back</span></BackButton>
    <MainDiv>
      <Feedback />
      <Comments />
      <CreateFeed />
    </MainDiv>
  </FeedBackDetailsWrapper>;
};

export default FeedBackDetails;


const FeedBackDetailsWrapper = styled.main`
 width:42rem;
 margin:auto;
 margin-top:10vh;
 margin-bottom:0vh;
 display:flex;
 flex-direction:column;
 gap:4rem;
 height:120vh;
`
const MainDiv = styled.div`
width:calc(100% - 0rem);
height:fit-content;
position:relative;
height:fit-content;;
border-radius:10px;
display:flex;
flex-direction:column;
gap:1rem !important;
& > div:first-of-type{
  width:100%;
}
& > div{
  width:100%;
}

`
const BackButton = styled.div`
  display:flex;
   gap:1rem;
   font-size:16px;
   cursor:pointer;
   font-weight:800;
   color:${colors.grey_text_secondary};
   .fa-long-arrow-alt-left{
     color:${colors.main_color}
   }
   @media screen and (max-width:768px){
     padding-left:2rem;
   }
 ` 