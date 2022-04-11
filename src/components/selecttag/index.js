import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import { useState } from "react";

import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  flex-direction: column;
  align-items: start;
  & > div {
    width: 100% !important;
  }
  > span {
    font-weight: 700;
    font-size: 20px;
    color: ${colors.chinese_black};
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const MenuList = styled(ListboxButton)`
  transition: all 0.3s ease-in-out;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const PopOver = styled(ListboxPopover)`
  transition: all 0.3s ease-in-out;
  background: #ffffff;
  position: absolute;
  bottom: 12%;
  box-shadow: 0px 10px 40px -7px ${colors.secondary_color};
  height: fit-content;
  border-radius: 15px;
  border: none !important;
  outline: none !important;
  > [data-reach-listbox-list] {
    width: calc(100% - 2rem);
    outline: none;
    padding: 1rem;
    border: none;
    border-radius: 15px;

    > [data-reach-listbox-option] {
      border-bottom: 1px solid rgba(58, 67, 116, 0.15);
      padding: 8px;
      border-radius: 15px;
      transition: all 0.5s ease-in-out;

      &:last-of-type {
        border-bottom: unset;
      }
      &:hover {
        transition: all 0.5s ease-in-out;
        background: ${colors.primary_cadium_violet};
      }
    }
  }
`;
export const ListboxI = styled(ListboxList)`
  border: 1px solid red !important;
`;

const Dropdown = ({ sort, setSort, style }) => {
  const [value, setValue] = useState("Least Upvotes");
  const handleChange = (value) => {
    setValue(value);
    setSort(value);
  };

  return (
    <Container style={style ? style : null}>
      <ListboxInput
        aria-labelledby="my-label"
        value={value}
        onChange={handleChange}
      >
        <MenuList arrow />
        <PopOver>
          <ListboxList>
            <ListboxOption value="Most Upvotes"> Most Upvotes </ListboxOption>
            <ListboxOption value="Least Upvotes">Least Upvotes</ListboxOption>
            <ListboxOption value="Most Comments">Most Comments</ListboxOption>
            <ListboxOption value="Least Comments">Least Comments</ListboxOption>
          </ListboxList>
        </PopOver>
      </ListboxInput>
    </Container>
  );
};

export default Dropdown;
