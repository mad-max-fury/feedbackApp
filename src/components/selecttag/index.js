import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";


const DropDownContainer = styled.div`
  width: ${props => props.width ? props.width : 'fit-content'} ;
  margin: 0 auto;
  position:relative;
  border-radius:10px;
`;

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #3faffa;
   border-radius:10px;
  background: ${props => props.width ? '#EBF2FE' : null};
  height:${props => props.height ? props.height : null};
  width: ${props => props.width ? props.width : null};
 
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
  width:200% !important;


`;

const ListItem = styled.li`
  list-style: none;
   border-bottom: 1px solid #e5e5e5;
  padding:.5rem 1rem;
   width: ${props => props.width ? props.width : '10rem'} ;
  &:hover{
    transition:all .4s ease-in;
    background:#f5f5f5;
    color:${colors.grey_text};
    padding:.5rem 1.2rem;
  }
`;

const options = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];

export default function SelecteTag({ style }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (

    <DropDownContainer width={style?.width}>
      <DropDownHeader width={style?.width} height={style?.height} onClick={toggling} className="far fa-angle-down">
        {selectedOption || "Most Upvotes"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem width={style?.width} onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>

  );
}