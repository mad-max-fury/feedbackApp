import React from 'react';
import styled from 'styled-components';
const Upvote = () => {
  return <UpvoteWrapper>
    <i className="fas fa-angle-up"></i>
    <span>123</span>
  </UpvoteWrapper >
};

export default Upvote;
const UpvoteWrapper = styled.button`
display: flex;
flex-direction:column;
padding:10px  ;
height:fit-content;
width:fit-content;
background:#f2f4fe;
color:#3a4374;
align-items:center;
gap:.2rem;
font-size:16px;
letter-spacing:-0.18px;
line-height:19px;
text-align:center;
outline:0;
border:none;
font-family:jost,sans-serif;
border-radius:10px;
font-weight:bold;
&:hover{
  transition:0.4s all ease-in-out;
  background:#cfd7ff;
}

`