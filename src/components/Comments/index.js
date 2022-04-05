import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import Comment from "../comment";
const Comments = ({ post, reload, postId, setReload }) => {
  return (
    <CommentWrapper>
      <h3>
        {post?.comments[0]?.comments?.length > 0
          ? post?.comments[0]?.comments?.length
          : 0}{" "}
        Comments
      </h3>
      {post?.comments[0]?.comments?.map((el, i) => {
        return (
          <Comment
            el={el}
            reload={reload}
            postId={postId}
            setReload={setReload}
            key={i}
          />
        );
      })}
    </CommentWrapper>
  );
};

export default Comments;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  padding: 1rem;
  width: calc(100% - 2rem) !important;

  gap: 0.6rem;
  & > h3 {
    padding: 0;
    margin: 0;
    align-self: start;
    padding-bottom: 1rem;
  }
`;
