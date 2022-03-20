import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignUpForm from '../../Auth/signup';
import { colors } from '../../colors';
import InputField from '../../components/inputfield';
import { motion } from 'framer-motion';
import { handleSignup } from '../../redux/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const SignUp = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goToSignInPage = () => navigate('/signin')
  const closeSignUpPage = () => navigate('/')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(fullName, userName, email, password)
    dispatch(handleSignup(fullName, userName, email, password))




  }
  return <SignUpWrapper onSubmit={handleFormSubmit} as={motion.form} initial={{ x: '100vw', opacity: 0 }} transition={{ delay: .1, type: 'spring', duration: 1 }} animate={{ x: 0, opacity: 1 }}>
    <i className="fas fa-times-circle fa-2x" onClick={closeSignUpPage}></i>
    <motion.main initial={{ scale: 0 }} transition={{ delay: .4, type: 'tween', duration: 1.2 }} animate={{ scale: 1 }}>
      <div>
        <span>Full Name</span>
        <InputField type={'text'} placeholder={'chris code'} functionName={setFullName} />
      </div>
      <div>
        <span>User Name</span>
        <InputField type={'text'} placeholder={'madmaxfury'} functionName={setUserName} />
      </div>
      <div>
        <span>Email</span>
        <InputField type={'email'} placeholder={'hello@example.com'} functionName={setEmail} />
      </div>
      <div>
        <span>Password</span>
        <InputField type={'password'} placeholder={'.........'} functionName={setPassword} />
      </div>
      <div style={{ paddingTop: '.5rem' }}>
        <SignUpForm text={'Sign Up'} />
      </div>
      <div>
        <p>Have an Account ? <a onClick={goToSignInPage}>Sign In</a> here</p>
      </div>
    </motion.main>

  </SignUpWrapper >;
};

export default SignUp;

const SignUpWrapper = styled(motion.form)`
width:calc(100vw - 1rem);
height:calc(100vh - 2rem);
padding:1rem;
background:radial-gradient(128.88% 128.88% at 103.9% -10.39%, rgb(232, 77, 112) 0%, rgb(163, 55, 246) 53.09%, rgb(40, 167, 237) 100%);
display:flex;
flex-direction:column;
  & > i{
   color:${colors.white};
    &:hover{
      transition:all 0.3s ease-in;
      cursor:pointer;
      color:red;
    }
  }
  & > main{
    margin:auto;
    padding:2rem;
    width:fit-content;
    background:${colors.white};
    border-radius:10px;
    display:flex;
    flex-direction:column;
    gap:1rem;
    & > div{
      display:flex;
      flex-direction:column;
      gap:1rem;
      width:350px;
      @media and (max-width:768px){
        width:260px;
      }
      span{
        font-weight:bold;
      }
      p{
        text-align:center;
        a{
          color:#AD1FEA;
          font-size:16px;
          font-weight:bold;
          text-decoration:underline;
          cursor:pointer;
        }
      }

    }
  }
`

