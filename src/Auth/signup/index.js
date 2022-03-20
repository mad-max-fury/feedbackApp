import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import useLocalStorage from '../../hooks/useLocalStorage';

const SignUpForm = ({ text }) => {
  const state = useSelector(state => state)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    if (state.auth.sign_up === false) {
      return
    } else {
      navigate('/signin')
      setLoading(false)
    }
  }, [state])

  return <Button type='submit'
    className={loading ? 'btn--loading' : ''} onClick={() => setLoading(true)}><span>{text}</span>
  </Button>;
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
position:relative;
 &:hover{
   transition:all 0.2s ease-in;
   height:2.8rem;
   background:#c75af6;
 }
  span{
 transition:all 0.2s;
 }
`