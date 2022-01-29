import React from 'react';
import styled from 'styled-components';

const HeadingRoadMap = ({ count, text, category }) => {
  return <HeadingRoadMapWrap>
    <h3>{category}({count})</h3>
    <p>{text}</p>
  </HeadingRoadMapWrap>;
};

export default HeadingRoadMap;

const HeadingRoadMapWrap = styled.div`
     text-align:start;
     padding: 1rem 0;
     display:flex;
     flex-direction:column;
     gap:.2rem;
     h3{
       margin:0;
       color:#3A4374;
     }
     p{
       margin:0;
      color:#647196;
     }

`