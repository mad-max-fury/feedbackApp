import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignUpForm from '../../Auth/signup';
import { colors } from '../../colors';
import InputField from '../../components/inputfield';

const SignUp = () => {
  const navigate = useNavigate()
  const goToSignInPage = () => navigate('/signin')
  const closeSignUpPage = () => navigate('/')
  return <SignUpWrapper>
    <i class="fas fa-times-circle fa-2x" onClick={closeSignUpPage}></i>
    <main>
      <div>
        <span>Full Name</span>
        <InputField type={'text'} placeholder={'chris code'} />
      </div>
      <div>
        <span>User Name</span>
        <InputField type={'text'} placeholder={'madmaxfury'} />
      </div>
      <div>
        <span>Email</span>
        <InputField type={'email'} placeholder={'hello@example.com'} />
      </div>
      <div>
        <span>Password</span>
        <InputField type={'password'} placeholder={'.........'} />
      </div>
      <div style={{ paddingTop: '.5rem' }}>
        <SignUpForm text={'Sign Up'} />
      </div>
      <div>
        <p>Have an Account ? <a onClick={goToSignInPage}>Sign In</a> here</p>
      </div>
    </main>

  </SignUpWrapper>;
};

export default SignUp;

const SignUpWrapper = styled.form`
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

