import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RoadMap = () => {
  return (
    <RoadMapWrapper>
      <div className="headingRoadmap">
        <h3>Roadmap</h3>
        <Link to={"/roadmap"}>view</Link>
      </div>
      <div className="contents">
        <div>
          <span
            style={{
              width: ".4rem",
              height: ".4rem",
              borderRadius: ".2rem",
              background: "#f49f85",
            }}
          ></span>{" "}
          <p>Planned</p> <h4>2</h4>
        </div>
        <div>
          <span
            style={{
              width: ".4rem",
              height: ".4rem",
              borderRadius: ".2rem",
              background: "#ad1fea",
            }}
          ></span>{" "}
          <p>In-Progress</p> <h4>1</h4>
        </div>
        <div>
          <span
            style={{
              width: ".4rem",
              height: ".4rem",
              borderRadius: ".2rem",
              background: "#62bcfa",
            }}
          ></span>{" "}
          <p>Live</p> <h4>2</h4>
        </div>
      </div>
    </RoadMapWrapper>
  );
};

export default RoadMap;

const RoadMapWrapper = styled.div`
  width: 208px;
  height: 10rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding: 20px;
  background: #fff;
  border-radius: 10px;

  .headingRoadmap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin: 0;
      font-size: 18px;
      color: #3a4374;
      letter-spacing: -0.25px;
    }
    a {
      color: #4661e6;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4,
      p,
      span {
        margin: 0;
      }
      h4 {
        color: #647196;
        font-weight: bold;
        font-size: 18px;
      }
      p {
        width: 150px;
        color: #647196;
      }
    }
  }
`;
