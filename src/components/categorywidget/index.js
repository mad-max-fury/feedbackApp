import React from 'react';
import styled from 'styled-components';

const CategoryWidget = () => {
  const category = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  return <CateWidWrapper>
    {
      category.map(el => {
        return <button><span>{el}</span></button>
      })
    }
  </CateWidWrapper>;
};

export default CategoryWidget;

const CateWidWrapper = styled.div`
 width:188px;
 height:10rem;
 display:flex;
 flex-flow:row wrap;
 padding:20px;
 padding-right:40px;
 background:#fff;
 border-radius:10px;
 justify-content:space-between;
 button{
  display: flex;
  flex-direction:column;
  width:fit-content;
  height:fit-content;
  background:#f2f4fe;
  padding:.8rem 1rem;
  color:#4661e6;
  align-items:center;
  font-size:13px;
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
    padding:.7rem .9rem;
  }

}

`