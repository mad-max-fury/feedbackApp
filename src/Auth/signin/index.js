import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = ({ text }) => {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.auth.sign_in === false) {
      return;
    } else {
      navigate("/");
      setLoading(false);
    }
  }, [state]);

  return (
    <Button
      className={loading ? "btn--loading" : ""}
      onClick={() => setLoading(true)}
    >
      <span>{text}</span>
    </Button>
  );
};

export default Login;

const Button = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  outline: 0;
  border: none;
  background: #ad1fea;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  &:hover {
    transition: all 0.2s ease-in;
    height: 2.8rem;
    background: #c75af6;
  }
  span {
    transition: all 0.2s;
  }
`;
