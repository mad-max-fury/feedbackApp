import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ConnectBtn from "../../components/ConnectBtn";
import SelecteTag from "../../components/selecttag";
import { motion } from "framer-motion";


const Widget = () => {
  const navigate = useNavigate();
  const addFeedback = () => navigate("/CreateFeed");

  return (
    <WidgetWrapper
      as={motion.div}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.15, type: "tween", duration: 1 }}
    >
      <div className="sort">
        <span className="suggestionCount">
          <h3>
            <i className="far fa-lightbulb "></i> 28 Suggestions
          </h3>
        </span>
        <span className="sortBox">
          Sort by:
          <SelecteTag />
        </span>
      </div>
      <div className="btnWrap">
        <ConnectBtn text={"+ Add Feedback"} OnClick={addFeedback} />
      </div>
    </WidgetWrapper>
  );
};

export default Widget;

const WidgetWrapper = styled(motion.div)`
  width: 50vw;
  height: fit-content;
  padding: 0.5rem 1rem;
  background-color: #373f68;
  margin: auto;
  display: flex;
  gap: 1rem;
  border-radius: 10px;
  justify-content: space-between;
  color: #fff;
  @media screen and (max-width: 770px) {
    width: 100vw !important;
    border-radius: 0px;
    padding: 0.5rem 0;
    justify-content: space-around;
  }
  .btnWrap {
    display: flex;
    align-items: center;
    & > div {
      @media screen and (max-width: 450px) {
        width: fit-content;
        padding: 0 0.7rem;
      }
    }
  }
  .sort {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .suggestionCount {
    h3 > i {
      padding-right: 1rem;
    }
  }
  @media screen and (max-width: 939px) {
    position: relative;
    width: 82vw;
    .suggestionCount {
      display: none;
    }
  }
  .sortBox {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
`;
