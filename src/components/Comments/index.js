import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import Comment from '../comment';
const Comments = () => {
  const reply = ['hey man!!!', 'ok cool stuff, you did here']
  return <CommentWrapper>
    <h3>3 Comments</h3>
    <Comment arr={reply} />
    <Comment />
    <Comment />
  </CommentWrapper>;
};

export default Comments;


const CommentWrapper = styled.div`

display: flex;
flex-direction: column;
width:100%;
border-radius:10px ;
background:#fff;
padding:1rem;
gap: .6rem;
& > h3{
  padding: 0;
  margin: 0;
  align-self:start;
  padding-bottom:1rem;
}

`