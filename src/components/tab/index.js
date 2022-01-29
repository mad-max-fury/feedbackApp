import React, { useState } from 'react';
import styled from "styled-components/macro";
import { colors } from "../../colors";
const Tabs = ({ tabs }) => {
  const [currentId, setCurrentId] = useState(0);

  const handleCurrentTab = (id) => {
    setCurrentId(id);
  };

  return (
    <Container style={{ width: `100%` }}>
      <TabHeader>
        {tabs.map((tab, i) => (
          <button
            onClick={() => handleCurrentTab(i)}
            style={{
              color:
                currentId === i
                  ? colors.secondary_color
                  : colors.secondary_text_color,

              borderBottom:
                currentId === i
                  ? `2px solid ${colors.secondary_color}`
                  : `2px solid transparent`,
            }}
            key={Math.random()}
          >
            {tab.name}
          </button>
        )) ?? []}
      </TabHeader>

      <TabBody>
        {tabs.map((tab, i) =>
          currentId === i ? <Content key={Math.random() * 5}>{tab.content}</Content> : null
        ) ?? []}
      </TabBody>
    </Container>
  );
};

export default Tabs;

export const Container = styled.div``;

export const Content = styled.div``;

export const TabHeader = styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 1rem;
    color: ${colors.grey_text};
    font-weight: 800;
    padding: 5px;
  }
`;

export const TabBody = styled.div`
  margin-top: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
`;