import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import feedbackApp from "../../api/feedbackApp";
const Upvote = ({ post, setReload, reload, successful, setSuccessful }) => {
  const state = useSelector((state) => state);
  const accessToken = state?.auth?.profile?.accessToken;
  const handleUpvote = async (post) => {
    try {
      const response = await feedbackApp.patch(
        `/upvote/${post?._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setReload(!reload);
      setSuccessful(successful);
    } catch (err) {
      toast.error("upvote failed");
    }
  };
  return (
    <UpvoteWrapper
      onClick={() => handleUpvote(post)}
      className={
        post?.upvoters?.includes(state?.auth?.profile?.userId) ? "active" : null
      }
    >
      <i className="fas fa-angle-up"></i>
      <span>{post?.upvoters?.length}</span>
    </UpvoteWrapper>
  );
};

export default Upvote;
const UpvoteWrapper = styled.button`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: fit-content;
  // width: fit-content;
  background: #f2f4fe;
  color: #3a4374;
  align-items: start;
  gap: 0.2rem;
  font-size: 16px;
  letter-spacing: -0.18px;
  line-height: 19px;
  text-align: center;
  outline: 0;
  border: none;
  font-family: jost, sans-serif;
  border-radius: 10px;
  font-weight: bold;
  @media screen and (max-width: 915px) {
    width: fit-content;
  }
  &:hover {
    transition: 0.4s all ease-in-out;
    background: #cfd7ff;
  }
  &.active {
    transition: 0.4s all ease-in-out;
    background: #5687f1;
    color: #fff;
  }
`;
