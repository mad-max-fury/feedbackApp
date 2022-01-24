import React from 'react';
import styled from 'styled-components';
const CategoryBtn = () => {
  return <Btn>
    <span>bug</span>
  </Btn>;
};

export default CategoryBtn;
const Btn = styled.button`
display: flex;
flex-direction:column;
padding:8px 12px ;
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

`