import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import feedbackApp from "../../api/feedbackApp";
import { colors } from "../../colors";
import InputField from "../inputfield";
const Comment = ({ el, reload, postId, setReload }) => {
  const state = useSelector((state) => state);
  const accessToken = state?.auth?.profile?.accessToken;
  const [makeReply, setMakeReply] = useState(false);
  const [value, setValue] = useState("");
  console.log(el);
  const handleReply = async (e) => {
    e.preventDefault();
    console.log(value, el?._id);
    try {
      const response = await feedbackApp.post(
        `/replyComment/${el?._id}`,
        {
          comment: value,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("replied");
      setMakeReply(!makeReply);
      setReload(!reload);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <CommentMessage>
        <div>
          <div>
            <div className="userDetails">
              <div className="avater">
                <img src="/images/asset 1.svg" alt="djsd" />
              </div>
              <div className="username">
                <h5>{el?.authorName}</h5>
                <p>@madmaxfury</p>
              </div>
            </div>
            <div className="usermessage">
              <p>{el?.comment}</p>
            </div>
          </div>
          {state?.auth?.profile?.userId && (
            <div>
              <span title="reply" onClick={() => setMakeReply(!makeReply)}>
                ↩
              </span>
              {el?.author === state?.auth?.profile?.userId && (
                <i title="delete" className="fas fa-times-circle fa-1x"></i>
              )}
            </div>
          )}
          {makeReply && (
            <form onSubmit={handleReply}>
              <InputField
                type={"textarea"}
                placeholder={"Type your reply..."}
                functionName={setValue}
              />
              <BtnWrap>
                {" "}
                <span>+ Reply</span>
              </BtnWrap>
            </form>
          )}
        </div>
        {el?.subComments?.length > 0 ? (
          <ReplyWrap>
            {el?.subComments?.map((re) => {
              return (
                <div key={Math.random()}>
                  <div className="userDetails">
                    <div className="avater">
                      <img src="/images/asset 1.svg" alt="djsd" />
                    </div>
                    <div className="username">
                      <h5>{re?.authorName}</h5>
                      <p>@madmaxfury</p>
                    </div>
                  </div>
                  <div className="usermessage">
                    <p>{re?.comment}</p>
                  </div>
                </div>
              );
            })}
          </ReplyWrap>
        ) : null}
      </CommentMessage>
    </>
  );
};

export default Comment;
const ReplyWrap = styled.div`
  width: 90%;
  margin-left: 4vw;
  // border: 1px solid red;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.2rem;
  .userDetails {
    display: flex;

    width: 70%;
    flex-wrap: wrap;
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

    p {
      margin: 0;
      color: #647196;
    }
  }
`;
const BtnWrap = styled.button`
  outline: none;
  border: none;
  color: #fff;
  align-self: flex-end;
  background: ${(props) =>
    props.clr ? `${colors.grey_text}` : `${colors.secondary_color}`};
  max-width: fit-content;
  height: 3rem;
  padding: 0rem 0.8rem;
  border-radius: 10px;
  font-size: 20px;
  font-weight: normal;
  display: flex;
  span {
    margin: auto;
  }
  &:hover {
    transition: all 0.2s ease-in;
    padding: 0 1rem;
    height: 2.8rem;
    background: "#c75af6";
  }
  @media (min-width: 768px) {
    flex-flow: row;
    max-height: 3rem;
    font-size: 16px;
  }
`;
const CommentMessage = styled.div`
  border-bottom: 1px solid #ebf2fe;
  display: flex;
  flex-flow: column;

  & > div {
    display: flex;
    flex-flow: row wrap;
    & > form {
      transition: all 0.2s ease-in;
      padding-bottom: 1rem;
      @media (min-width: 768px) {
        flex-flow: row;
        & > div {
          height: 5rem;
          & textarea {
            max-height: 3rem;
          }
        }
      }
      // border: 1px solid red;
      width: 80%;
      gap: 1rem;
      margin: auto;
      align-self: flex-end;
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      & > div {
        width: 100%;
      }
    }
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      & > div:last-of-type {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        span {
          color: ${colors.main_color};
          font-size: 25px;
          font-weight: 700;
          &:hover {
            cursor: pointer;
            color: #000;
          }
        }
        i {
          color: ${colors.main_color};
          &:hover {
            color: red;
            cursor: pointer;
          }
        }
      }
      & > div:first-of-type {
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

          p {
            margin: 0;
            color: #647196;
          }
        }
      }
    }
  }
`;
