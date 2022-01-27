import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';


const InputField = ({ type, placeholder }) => {
  const [value, setValue] = useState('')

  const handleChange = ({ target }) => {
    const { value } = target
    setValue(value)
  }
  return <InputWrap>
    <input type={type} placeholder={placeholder} onChange={handleChange} value={value} className='input' />
  </InputWrap>;
};

export default InputField;


const InputWrap = styled.div`
 width:95%;
 height:3rem;
 border-radius:10px;
 input{
   width:100%;
   height:100%;
   color:${colors.grey_text};
   font-size:13px;
   background:#EBF2FE;
   border-radius:inherit;
   outline:0;
   border:none;
   cursor:pointer;
   padding-left:1rem
  
 }
`