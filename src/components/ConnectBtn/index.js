import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const ConnectBtn = ({ text, OnClick }) => {
  return (
    <BtnWrapper onClick={() => OnClick()}>
      <span>{text}</span>
    </BtnWrapper>
  );
};

export default ConnectBtn;

const BtnWrapper = styled.div`
  color: #fff;
  background: ${colors.secondary_color};
  width: 13rem;
  height: 3rem;
  border-radius: 10px;
  margin: auto 0;
  font-weight: normal;
  display: flex;

  span {
    margin: auto;
  }
  &:hover {
    transition: all 0.3s ease-in;
    width: 12.8rem;
    height: 2.8rem;
    background: #c75af6;
  }
`;
