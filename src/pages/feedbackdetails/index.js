import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import feedbackApp from "../../api/feedbackApp";
import { colors } from "../../colors";
import Comments from "../../components/Comments";
import CreateFeed from "../../containers/createcomment";
import Feedback from "../../containers/feedback/Feedback";
const FeedBackDetails = () => {
  const postId = localStorage.getItem("postId")
    ? localStorage.getItem("postId")
    : null;

  const [reload, setReload] = useState(false);
  const [post, setPost] = useState(null);
  console.log(post);

  const handleGetPosts = async (postId) => {
    if (postId === null) window.history.back();
    try {
      const response = await feedbackApp.get(`/${postId}`);
      setPost(response?.data?.result);
      localStorage.setItem("postId", postId);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    handleGetPosts(postId);
  }, [postId, reload]);

  const handleBackClick = () => window.history.back();

  return (
    <FeedBackDetailsWrapper>
      <BackButton onClick={handleBackClick}>
        <span>
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>{" "}
        <span>Go Back</span>
      </BackButton>
      <MainDiv>
        <Feedback post={post} />
        <Comments
          reload={reload}
          post={post}
          postId={postId}
          setReload={setReload}
        />
        <CreateFeed
          reload={reload}
          post={post}
          postId={postId}
          setReload={setReload}
        />
      </MainDiv>
    </FeedBackDetailsWrapper>
  );
};

export default FeedBackDetails;

const FeedBackDetailsWrapper = styled.main`
  width: 42rem;
  margin: auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 120vh;
  @media (max-width: 768px) {
    padding: 2rem;
    width: calc(100% - 4rem);
    margin: auto !important;
  }
`;
const MainDiv = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem !important;
  & > div:first-of-type {
    width: calc(100% - 2rem);
  }
  & > div {
    width: calc(100% - 2rem);
  }
`;
const BackButton = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 16px;
  cursor: pointer;
  font-weight: 800;
  background: #ad1fea;
  padding: 1rem;
  width: fit-content;
  border-radius: 10px;
  color: ${colors.white};
  transition: all 0.3s ease-in-out;

  .fa-long-arrow-alt-left {
    color: ${colors.white};
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background: rgba(173, 31, 234, 0.8);
  }
`;
