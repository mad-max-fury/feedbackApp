import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../Auth/signin';
import { colors } from '../../colors';
import InputField from '../../components/inputfield';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { handleSignin } from '../../redux/action';

const SignIn = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCloseSignInPage = () => navigate('/')
  const goToSignUpPage = () => navigate('/signup')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(handleSignin(userNameOrEmail, password))

  }

  return <SignInWrapper as={motion.form} initial={{ x: '-100vw', opacity: 0 }} transition={{ delay: .1, type: 'spring', duration: 1 }} animate={{ x: 0, opacity: 1 }} onSubmit={handleFormSubmit}>
    <i className="fas fa-times-circle fa-2x" onClick={handleCloseSignInPage}></i>
    <motion.main initial={{ scale: 0 }} transition={{ delay: .4, type: 'tween', duration: 1.2 }} animate={{ scale: 1 }}>
      <div>
        <span>User Name</span>
        <InputField type={'text'} placeholder={'madmaxfury'} functionName={setUserNameOrEmail} />
      </div>
      <div>
        <span>Password</span>
        <InputField type={'password'} placeholder={'.........'} functionName={setPassword} />
      </div>
      <div style={{ paddingTop: '.5rem' }}>
        <Login text={'Login'} />
      </div>
      <div>
        <p>Dont have an account ? <a onClick={goToSignUpPage}>Sign up</a> here</p>
      </div>
    </motion.main>

  </SignInWrapper>;
};

export default SignIn;


const SignInWrapper = styled(motion.form)`
width:calc(100vw - 1rem);
height:calc(100vh - 2rem);
padding:1rem;
background:radial-gradient(128.88% 128.88% at 103.9% -10.39%, rgb(232, 77, 112) 0%, rgb(163, 55, 246) 53.09%, rgb(40, 167, 237) 100%);
display:flex;
flex-direction:column;
  @media screen and (max-width:768px){
    // border:1px solid red;
    padding:0;
    width:100%;
    height:100vh;
  }
  & > i{
   color:${colors.white};
   width:fit-content;
      @media screen and (max-width:768px){
        align-self:center;
        margin-top:1rem;
        // border:1px solid red;
      }
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
       @media screen and (max-width:768px){
       padding:1rem;
      }
    gap:1rem;
    & > div{
      display:flex;
      flex-direction:column;
      gap:1rem;
      width:350px;
      @media screen and (max-width:768px){
        width:260px;
        // border:1px solid red;
      }
       @media screen and (max-width:300px){
          width:240px;
          //  border:1px solid green;
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