import React from "react";
import styled from "styled-components";
import CategoryBtn from "../feedCateBtn";

const FeedBackMessage = ({ post, handleFeedDetails }) => {
  const date = new Date(post?.created_at);

  return (
    <Message onClick={() => handleFeedDetails()}>
      <div className="userDetails">
        <div className="avater">
          <img src="/images/asset 1.svg" alt="djsd" />
        </div>
        <div className="username">
          <h5>{post?.authorName}</h5>
          <p>{date.toDateString()}</p>
        </div>
      </div>
      <div className="usermessage">
        <h3 className="heading">{post?.title}</h3>
        <p>{post?.feedback}</p>
      </div>
      <CategoryBtn cate={post?.postTag} />
    </Message>
  );
};

export default FeedBackMessage;

const Message = styled.div`
  .userDetails {
    display: flex;
    gap: 1rem;
    .avater {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      & > img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .username {
      text-align: start;
      h5 {
        margin: 0;
        color: #3a4374;
      }
      p {
        margin: 0;
        font-size: 13px;
        color: #647196;
      }
    }
  }
  .usermessage {
    text-align: start;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
      color: #647196;
    }
  }
`;
