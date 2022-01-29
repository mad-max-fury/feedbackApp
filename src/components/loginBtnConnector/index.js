import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
const LoginConnect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleIsLoggedIn = () => setIsLoggedIn(true)


  return <>
    {
      !isLoggedIn ? <BtnWrapper onClick={handleIsLoggedIn}><span>Login</span></BtnWrapper>
        : <UserWrapper>
          <div className='userDetails'>
            <div className='avater'>
              <img src='/images/asset 1.svg' alt='djsd' />
            </div>
            <div className='username'>
              <h5>Hacker Mann</h5>
              <p>@madmaxfury</p>
            </div>
            <div><span>...</span></div>
          </div>
        </UserWrapper>
    }
  </>
};

export default LoginConnect;


const BtnWrapper = styled.div`
 color:#fff;
 background:${colors.secondary_color};
 width:13rem;
 height:3rem;
 border-radius:10px;
 margin:auto 0;
font-weight:normal;
display:flex;

span{
  margin:auto;
}
 &:hover{
   transition:all 0.2s ease-in;
   width:12.8rem;
   height:2.8rem;
   background:#c75af6;
 }
 
`
const UserWrapper = styled.div`
  &:hover{
    transition:all 0.4s ease-in-out;
    cursor:pointer;
    background:#f5f5f5;
    padding:.5rem;
    border-radius:10px;
  }
  .userDetails{
   display:flex;
   gap:1rem;
   .avater{
     height:40px;
     width:40px;
     border-radius:20px;
     & > img{
       width:100%;
       height:100%;
      border-radius:inherit;
     }
   }
   .username{
     text-align:start;
     h5{
       margin:0;
       color:#3a4374;
     }
     p{
       margin:0;
       font-size:13px;
       color:#647196;
     }
   } 
 }
`