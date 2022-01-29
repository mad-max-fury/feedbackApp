import React from 'react';
import styled from 'styled-components';
const CreaateFeed = () => {
  const handleBackClick = () => {

  }
  return <CreateFeedWrapper>
    <BackButton onClick={handleBackClick}><span></span> <span>Go Back</span></BackButton>
    <MainDiv>

    </MainDiv>

  </CreateFeedWrapper>;
};

export default CreaateFeed;

const CreateFeedWrapper = styled.main`
 width:35rem;
 border:1px solid red;
 margin:auto;
`
const BackButton = styled.button`

`
const MainDiv = styled.div`
`