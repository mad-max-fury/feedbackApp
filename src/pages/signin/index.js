import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../colors";
import InputField from "../../components/inputfield";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { handleSignin } from "../../redux/action";
import feedbackApp from "../../api/feedbackApp";
import { toast } from "react-toastify";

const SignIn = () => {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [nameField, setNameField] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleCloseSignInPage = () => navigate(from);
  const goToSignUpPage = () => navigate("/signup");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await feedbackApp.post("/users/login", {
        nameField,
        password,
      });
      dispatch(handleSignin(response?.data));

      toast.success(response?.data?.message);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err?.response);
      if (!err?.response) {
        toast.error("Check Network Connection");
        setLoading(false);
      } else if (err.response?.status === 400) {
        toast.error(err?.response?.data?.message);
        setLoading(false);
      } else if (err.response?.status === 401) {
        toast.error("Unauthorized");
        setLoading(false);
      } else {
        toast.error("Login Failed");
        setLoading(false);
      }
    }
  };

  return (
    <SignInWrapper
      as={motion.form}
      initial={{ x: "-100vw", opacity: 0 }}
      transition={{ delay: 0.1, type: "spring", duration: 1 }}
      animate={{ x: 0, opacity: 1 }}
      onSubmit={handleFormSubmit}
    >
      <i
        className="fas fa-times-circle fa-2x"
        onClick={handleCloseSignInPage}
      ></i>
      <motion.main
        initial={{ scale: 0 }}
        transition={{ delay: 0.4, type: "tween", duration: 1.2 }}
        animate={{ scale: 1 }}
      >
        <div>
          <span>User Name</span>
          <InputField
            type={"text"}
            placeholder={"madmaxfury"}
            functionName={setNameField}
          />
        </div>
        <div>
          <span>Password</span>
          <InputField
            type={"password"}
            placeholder={"........."}
            functionName={setPassword}
          />
        </div>
        <div style={{ paddingTop: ".5rem" }}>
          <Button
            className={loading ? "btn--loading" : ""}
            onClick={() => setLoading(true)}
          >
            <span>login</span>
          </Button>
        </div>
        <div>
          <p>
            Dont have an account ? <a onClick={goToSignUpPage}>Sign up</a> here
          </p>
        </div>
      </motion.main>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled(motion.form)`
  width: calc(100vw - 1rem);
  height: calc(100vh - 2rem);
  padding: 1rem;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    rgb(232, 77, 112) 0%,
    rgb(163, 55, 246) 53.09%,
    rgb(40, 167, 237) 100%
  );
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    // border:1px solid red;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
  & > i {
    color: ${colors.white};
    width: fit-content;
    @media screen and (max-width: 768px) {
      align-self: center;
      margin-top: 1rem;
      // border:1px solid red;
    }
    &:hover {
      transition: all 0.3s ease-in;
      cursor: pointer;
      color: red;
    }
  }
  & > main {
    margin: auto;
    padding: 2rem;
    width: fit-content;
    background: ${colors.white};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
    gap: 1rem;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 350px;
      @media screen and (max-width: 768px) {
        width: 260px;
        // border:1px solid red;
      }
      @media screen and (max-width: 300px) {
        width: 240px;
        //  border:1px solid green;
      }
      span {
        font-weight: bold;
      }
      p {
        text-align: center;
        a {
          color: #ad1fea;
          font-size: 16px;
          font-weight: bold;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;

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
