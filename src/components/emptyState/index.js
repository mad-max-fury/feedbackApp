import React from "react";
import styled from "styled-components";
const EmptyState = () => {
  return (
    <EmptyStateWrap>
      <div>
        <img src="images/image-wrap.png" />
      </div>
      <h3>No post here</h3>
    </EmptyStateWrap>
  );
};

export default EmptyState;

const EmptyStateWrap = styled.div`
  & > div {
    width: 25rem;
    height: 20rem;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 430px) {
        width: 95%;
        object-fit: contain;
        margin: 0 auto;
      }
    }
    @media (max-width: 430px) {
      width: 95%;
    }
  }
  & > h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #3a4374;
    width: fit-content;
    margin: 1rem auto;
  }
`;
