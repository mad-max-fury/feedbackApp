import React from 'react';
import styled from 'styled-components';

const SignUpForm = ({ text }) => {
  return <Button>{text}</Button>;
};

export default SignUpForm;

const Button = styled.button`
width:100%;
height:3rem;
border-radius:10px;
outline:0;
border:none;
background:#AD1FEA;
color:#fff;
font-size:16px;
font-weight:bold;
`