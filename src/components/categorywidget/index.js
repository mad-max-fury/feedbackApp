import React from "react";
import styled from "styled-components";

const CategoryWidget = ({ filter, setFilter }) => {
  const category = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const handleClick = (el) => {
    setFilter(el);
  };
  return (
    <CateWidWrapper>
      {category.map((el) => {
        return (
          <button
            key={Math.random()}
            onClick={() => handleClick(el)}
            className={
              el.toLocaleLowerCase() === filter.toLocaleLowerCase()
                ? `active`
                : null
            }
          >
            <span>{el}</span>
          </button>
        );
      })}
    </CateWidWrapper>
  );
};

export default CategoryWidget;

const CateWidWrapper = styled.div`
  width: 188px;
  height: 10rem;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
  padding-right: 40px;
  background: #fff;
  border-radius: 10px;
  justify-content: space-between;
  button {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    background: #f2f4fe;
    padding: 0.8rem 1rem;
    color: #4661e6;
    align-items: center;
    font-size: 13px;
    letter-spacing: -0.18px;
    line-height: 19px;
    text-align: center;
    outline: 0;
    border: none;
    font-family: jost, sans-serif;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      transition: 0.4s all ease-in-out;
      background: #cfd7ff;
      padding: 0.7rem 0.9rem;
    }
    &.active {
      transition: 0.4s all ease-in-out;
      background: #5687f1;
      padding: 0.7rem 0.9rem;
      color: #fff;
    }
  }
`;
