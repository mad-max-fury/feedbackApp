import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';
import FeedBackMessage from '../../components/message';
import Upvote from '../../components/upvote';

const Feedback = () => {
  const navigate = useNavigate()
  const handleFeedDetails = () => {
    navigate('/feedbackdetails')
  }
  return <FeedbackWrapper onClick={handleFeedDetails}>
    <div className='firstWrap'>
      <Upvote />
      <FeedBackMessage />
    </div>
    <CommentCount >
      <span className='commentIcon'><i className="fas fa-comment"></i></span>
      <span className='count'>3</span>
    </CommentCount>
  </FeedbackWrapper>;
};

export default Feedback;

const FeedbackWrapper = styled.div`

 width:50vw;
 height:fit-content;
 padding:1rem;
 background-color:${colors.white};
 margin:auto;
 display:flex;
 gap:1rem;
 border-radius:10px;
 justify-content:space-between;
 @media screen and (max-width:915px){
   width:85vw;
 }
 .firstWrap{
   display:flex;
   gap:2rem;
 }
 @media screen and (max-width:939px){
   position:relative;
    width:80vw;
    .firstWrap{
   flex-direction:column-reverse;
  }
 }
 &:hover{
   transition:all 0.4s ease-in-out;
   padding:.8rem;
 }


`
const CommentCount = styled.div`
margin:auto 0;
 display:flex;
 gap:.4rem;
 .commentIcon{
   color:#cdd2ee;
   font-size:16px;
 }
 .count{
   color:#3a4374;
   font-size:16px;
   font-weight:bold;
 }
  @media screen and (max-width:800px){
   position:absolute;
   top:80%;
   right:10%;
 
  
 }
`

