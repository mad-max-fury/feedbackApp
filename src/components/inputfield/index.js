import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const InputField = ({ type, placeholder, functionName, disabled }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setValue(value);
    functionName(value);
  };
  return (
    <InputWrap>
      {type !== "textarea" ? (
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          className="input"
          disabled={disabled}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          maxLength={250}
        ></textarea>
      )}
    </InputWrap>
  );
};

export default InputField;

const InputWrap = styled.div`
  width: 95%;
  height: fit-content;
  border-radius: 10px;
  input {
    width: 100%;
    height: 100%;
    min-height: 3rem;
    color: ${colors.grey_text};
    font-size: 13px;
    background: #ebf2fe;
    border-radius: inherit;
    outline: 0;
    border: none;
    cursor: pointer;
    padding-left: 1rem;
  }
  & > textarea {
    border: none;
    font-size: 13px;
    background: #ebf2fe;
    width: calc(100% - 2rem) !important;
    padding: 1rem;
    border-radius: 10px;
    height: 5rem !important;
    outline: 0;
    border: none;
  }
`;
