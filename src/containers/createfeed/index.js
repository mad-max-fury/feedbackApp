import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import InputField from '../../components/inputfield';
import SelecteTag from '../../components/selecttag';
const CreateFeed = () => {
  const handleBackClick = () => {
    window.history.back()
  }
  const style = { width: '100%', height: '3rem' }
  return <CreateFeedWrapper>
    <BackButton onClick={handleBackClick}><span><i className="fas fa-long-arrow-alt-left"></i></span> <span>Go Back</span></BackButton>
    <MainDiv>
      <h2>Create New Feedback</h2>
      <FeedWidWrap>
        <h5>Feedback Title</h5>
        <p>Add a short, descriptive headline</p>
        <InputField placeholder={'Nice and easy to use'} />
      </FeedWidWrap>
      <FeedWidWrap>
        <h5>Category</h5>
        <p>Choose a category for your feedback</p>
        <SelecteTag style={style} />
      </FeedWidWrap>
      <FeedWidWrap>
        <h5>Feedback Detail</h5>
        <p>Include any specific comments on what should be improved, added, etc</p>
        <InputField type={'textarea'} placeholder={'Nice and easy to use...'} />
      </FeedWidWrap>
      <CtaBtns>
        <BtnWrapper ><span>+ Feedback</span></BtnWrapper>
        <BtnWrapper clr={'grey'} ><span>Cancel</span></BtnWrapper>
      </CtaBtns>
    </MainDiv>

  </CreateFeedWrapper>;
};

export default CreateFeed;

const CreateFeedWrapper = styled.main`
 width:35rem;
 margin:auto;
 margin-top:10vh;
 margin-bottom:0vh;

 display:flex;
 flex-direction:column;
 gap:4rem;
 height:120vh;
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
const MainDiv = styled.div`
width:calc(100% - 4rem);
height:fit-content;
padding:2rem;
position:relative;
height:fit-content;;
border-radius:10px;
background:${colors.white};

&:before{
  content:'+';
  width:3.5rem;
  height:3.5rem;
  background: radial-gradient(128.88% 128.88% at 103.9% -4.39%, rgb(232, 77, 112) 0%, rgb(163, 55, 246) 33.09%, rgb(40, 167, 237) 100%);
  border-radius:50%;
  position:absolute;
  text-align:center;
  color:#fff;
  font-size:33px;
  font-weight:900;
  top:-4%;
  left:5%;
}
& > h2 {
  padding-top:1rem;
  font-size:24px;
   font-weight:800;
   color:${colors.grey_text}
}
display:flex;
flex-direction:column;
gap:1rem !important;

`
const FeedWidWrap = styled.div`
margin-bottom:1rem;
 display:flex;
 flex-direction:column;
 gap:.6rem;
 h5{
   padding:0;
     margin:0;
 }
 p{
   margin:0;
   font-size:14px;
 }
`
const BtnWrapper = styled.div`
 color:#fff;
 background:${props => props.clr ? `${colors.grey_text}` : `${colors.secondary_color}`};
 width:fit-content;
 height:3rem;
 padding:0rem .8rem;
 border-radius:10px;
 margin:auto 0;
font-weight:normal;
display:flex;

span{
  margin:auto;
}
 &:hover{
   transition:all 0.2s ease-in;
  padding:0 1rem;
   height:2.8rem;
   background:'#c75af6';
 }
`
const CtaBtns = styled.div`
display: flex;
flex-wrap: wrap;
align-self:flex-end;
gap: 1rem;
` 