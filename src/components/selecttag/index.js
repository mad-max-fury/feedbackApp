import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";


const DropDownContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  position:relative;
`;

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #3faffa;
 
`;

const DropDownListContainer = styled.div`
position:absolute;
z-index:100;
  top:220%;`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: ${colors.general_bg};
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1rem;
  font-weight: 500;
  border-radius:10px;
  width:fit-content !important;


`;

const ListItem = styled.li`
  list-style: none;
   border-bottom: 1px solid #e5e5e5;
  padding:.5rem 1rem;
  width:10rem;
  &:hover{
    transition:all .4s ease-in;
    background:#f5f5f5;
    color:${colors.grey_text};
    padding:.5rem 1.2rem;
  }
`;

const options = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];

export default function SelecteTag() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (

    <DropDownContainer>
      <DropDownHeader onClick={toggling} className="far fa-angle-down">
        {selectedOption || "Most Upvotes"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>

  );
}