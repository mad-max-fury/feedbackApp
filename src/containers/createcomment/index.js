import React, { useState } from "react";
import InputField from "../../components/inputfield";
import styled from "styled-components";
import { colors } from "../../colors";
import feedbackApp from "../../api/feedbackApp";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const CreateFeed = ({ reload, post, postId, setReload }) => {
  const state = useSelector((state) => state);
  const accessToken = state?.auth?.profile?.accessToken;
  const [value, setValue] = useState("");
  const handleClick = async () => {
    console.log(value);

    try {
      const response = await feedbackApp.post(
        `/comment/${post?._id}`,
        {
          comment: value,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setReload(!reload);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <FeedWidWrap>
      <h3>Add Comment</h3>
      <InputField
        type={"textarea"}
        placeholder={"Nice and easy to use..."}
        functionName={setValue}
      />
      <div>
        <CtaBtns>
          <div>{250 - value.length} Characters left</div>
          <BtnWrapper onClick={handleClick}>
            <span>+ Comment</span>
          </BtnWrapper>
        </CtaBtns>
      </div>
    </FeedWidWrap>
  );
};

export default CreateFeed;

const FeedWidWrap = styled.div`
margin-bottom: 1rem;
display: flex;
flex-direction: column;
width:100%;
border-radius:10px ;
background:#fff;
padding:1rem;
gap: .6rem;
 h3{
  padding: 0;
  margin: 0;
  align-self:start;
}
 p{
  margin: 0;
  font - size: 14px;
}
& > div:last-of-type{
  width:100%;
}
& > div:nth-of-type(1){
  width:calc(100% - 0rem)!important;
}
`;
const BtnWrapper = styled.div`
  color: #fff;
  background: ${(props) =>
    props.clr ? `${colors.grey_text}` : `${colors.secondary_color}`};
  width: fit-content;
  height: 3rem;
  padding: 0rem 0.8rem;
  border-radius: 10px;
  margin: auto 0;
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
`;
const CtaBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
  gap: 1rem;
  color: ${colors.grey_text};
  font-size: 16px;
`;
