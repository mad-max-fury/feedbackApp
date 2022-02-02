import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
const Comment = ({ arr }) => {
  return <>
    <CommentMessage>
      <div>
        <div>
          <div className='userDetails'>
            <div className='avater'>
              <img src='/images/asset 1.svg' alt='djsd' />
            </div>
            <div className='username'>
              <h5>Hacker Mann</h5>
              <p>@madmaxfury</p>
            </div>
          </div>
          <div className='usermessage'>
            <p >really nice man!!!</p>
          </div>
        </div>
        <div>
          <span title='reply'>↩</span>
          <i title='delete' className="fas fa-times-circle fa-1x" ></i>
        </div>
      </div>
      {
        arr?.length > 0 ?
          <ReplyWrap>
            {
              arr?.map(el => {
                return <div key={Math.random()}>
                  <div className='userDetails'>
                    <div className='avater'>
                      <img src='/images/asset 1.svg' alt='djsd' />
                    </div>
                    <div className='username'>
                      <h5>Hacker Mann</h5>
                      <p>@madmaxfury</p>
                    </div>
                  </div>
                  <div className='usermessage'>
                    <p >{el}</p>
                  </div>
                </div>
              })
            }

          </ReplyWrap> : null
      }
    </CommentMessage>


  </>
};

export default Comment;
const ReplyWrap = styled.div`
width:fit-content;
margin-left:4vw;
display:flex;
flex-flow:column;
gap:1rem;
 .userDetails{
      display:flex;
       gap:1rem;
      .avater{
      height:50px;
      width:50px;
      border-radius:25px;
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
    .usermessage{
      text-align:start;
      padding: 1rem 0;
      display:flex;
      flex-direction:column;
      gap:.2rem;

      p{
       margin:0;
       color:#647196;
      }
    }`

const CommentMessage = styled.div`
  border-bottom: 1px solid #EBF2FE;
  display:flex;
  flex-flow:column;
  
  &> div{
    &:first-of-type{
      display:flex;
      justify-content:space-between;
       &> div:last-of-type{

       display:flex;
       align-items:center;
        gap:.8rem;
       span{
        color:${colors.main_color};
        font-size:25px;
        font-weight:700;
       &:hover{
        cursor:pointer;
        color:#000;
       }
      }
      i{
       color:${colors.main_color};
      &:hover{
        color:red;
        cursor:pointer;
      }
     }
   }
    & > div:first-of-type{
    .userDetails{
      display:flex;
       gap:1rem;
      .avater{
      height:50px;
      width:50px;
      border-radius:25px;
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
    .usermessage{
      text-align:start;
      padding: 1rem 0;
      display:flex;
      flex-direction:column;
      gap:.2rem;

      p{
       margin:0;
       color:#647196;
      }
    }
  }

 }
}
`