import React from 'react';
import styled from 'styled-components';
import CategoryBtn from '../feedCateBtn';
import Upvote from '../upvote';
const RoadMapCard = ({ heading, paragraph, category }) => {
  return <DivWrap style={{ borderTop: `5px solid ${category === 'Planned' ? '#F49F85' : category === 'Live' ? '#AD1FEA' : '#62BCFA'}` }}>

    <div><span style={{ width: '.6rem', height: '.6rem', borderRadius: '.3rem', background: `${category === 'Planned' ? '#F49F85' : category === 'Live' ? '#AD1FEA' : '#62BCFA'}` }}></span> <p>{category}</p></div>

    <div className='usermessage'>
      <h3 className='heading'>{heading}</h3>
      <p >{paragraph}</p>
    </div>
    <div>
      <CategoryBtn />
    </div>
    <div className='cwrap'>
      <Upvote />
      <CommentCount >
        <span className='commentIcon'><i className="fas fa-comment"></i></span>
        <span className='count'>2</span>
      </CommentCount>
    </div>
  </DivWrap>;
};

export default RoadMapCard;

const DivWrap = styled.div`
padding:1.5rem;
width:18rem;
height:fit-content;
border-radius:5px;
background:#fff;
border-top: 5px solid red;
display:flex;
flex-direction:column;
@media screen and (max-width:1100px) and (min-width:769px){
  transition: all 0.4s ease-in-out;
  width:15rem;
}
gap:.5rem ;
   &> div{

   }
   & > div:first-of-type{
     display:flex;
      gap:2rem;
     align-items:center;
    color:grey;
   }
    .usermessage{
     text-align:start;
     padding-bottom:.5rem;
     display:flex;
     flex-direction:column;
    

     gap:.2rem;
     h3{
       margin:0;
      padding:0;
     }
     p{
       margin:0;
      color:#647196;
     }
   }
   .cwrap{
     display:flex;
     justify-content:space-between;

   }
 
`
const CommentCount = styled.div`
 display:flex;
 gap:.4rem;
 margin:auto 0;
 .commentIcon{
   color:#cdd2ee;
   font-size:16px;
 }
 .count{
   color:#3a4374;
   font-size:16px;
   font-weight:bold;
 }

 `