import React from 'react';
import InputField from '../../components/inputfield';
import styled from 'styled-components';
import { colors } from '../../colors';
const CreateFeed = () => {
  return <FeedWidWrap>
    <h3>Add Comment</h3>
    <InputField type={'textarea'} placeholder={'Nice and easy to use...'} />
    <div>
      <CtaBtns>
        <div>250 Characters left</div>
        <BtnWrapper ><span>+ Feedback</span></BtnWrapper>
      </CtaBtns>
    </div>
  </FeedWidWrap>

};

export default CreateFeed;

const FeedWidWrap = styled.div`
margin-bottom: 1rem;
display: flex;
flex-direction: column;
width:100%;
border-radius:10px ;
background:#fff;
padding:1rem;
gap: .6rem;
 h3{
  padding: 0;
  margin: 0;
  align-self:start;
}
 p{
  margin: 0;
  font - size: 14px;
}
& > div:last-of-type{
  width:100%;
}
& > div:nth-of-type(1){
  width:calc(100% - 0rem)!important;
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
width:100%;
justify-content:space-between;
align-self:flex-end;
align-items:center;
gap: 1rem;
color:${colors.grey_text};
font-size:16px;

`