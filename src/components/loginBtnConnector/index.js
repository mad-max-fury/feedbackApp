import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import feedbackApp from "../../api/feedbackApp";
import { colors } from "../../colors";
import EditProfile from "../../containers/Editprofile";
import { handleLogout } from "../../redux/action";

const LoginConnect = ({ showModal, SetShowModal }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMiniModal, setShowMiniModal] = useState(false);

  const handleSignInPage = () => {
    navigate("/signin");
  };
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const accessToken = state?.auth?.profile?.accessToken;

  const Logout = async () => {
    try {
      const res = await feedbackApp.get("/users/logout", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTimeout(() => {
        toast.success("see Ya, come back quickly for more feed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        dispatch(handleLogout());
      }, 5000);
    } catch (err) {
      window.localStorage.removeItem("myStore");
      window.location.reload();
    }
  };
  useEffect(() => {
    if (state?.auth.sign_in === false) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [state?.auth.sign_in]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Wrap>
            <UserWrapper>
              <div
                className="userDetails"
                onClick={() => setShowMiniModal(true)}
              >
                <div className="avater">
                  <img src="/images/asset 1.svg" alt="djsd" />
                </div>
                <div className="username">
                  <h5>{state?.auth?.profile?.fullName.split(" ")[0]}</h5>
                  <p>@{state?.auth?.profile?.userName}</p>
                </div>
                <div>
                  <span>...</span>
                </div>
              </div>
            </UserWrapper>
            {showMiniModal ? (
              <MiniModal onClick={() => setShowMiniModal(false)}>
                <button onClick={Logout}>logout</button>
                <button onClick={() => SetShowModal(!showModal)}>
                  {" "}
                  Edit profile
                </button>
              </MiniModal>
            ) : null}
          </Wrap>
        </>
      ) : (
        <BtnWrapper onClick={handleSignInPage}>
          <span>Login</span>
        </BtnWrapper>
      )}
    </>
  );
};

export default LoginConnect;

const Wrap = styled.div`
  postion: relative;
`;

const MiniModal = styled.div`
  width: 13rem;
  height: 5rem;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;

  bottom: 70%;
  box-shadow: 0 0 4px grey;
  display: flex;
  flex-flow: column;
  button {
    height: 50%;
    border-radius: inherit;
    outline: 0;
    border: none;
    background: unset;
    text-transform: capitalize;
    color: #333;
    font-weight: bold;
    &:first-of-type {
      border-bottom: 1px solid #3333;
    }
  }
`;

const BtnWrapper = styled.div`
  color: #fff;
  background: ${colors.secondary_color};
  width: 13rem;
  height: 3rem;
  border-radius: 10px;
  margin: auto 0;
  font-weight: normal;
  display: flex;

  span {
    margin: auto;
  }
  &:hover {
    transition: all 0.2s ease-in;
    width: 12.8rem;
    height: 2.8rem;
    background: #c75af6;
  }
`;
const UserWrapper = styled.div`
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #f5f5f5;
    padding: 0.4rem;
    border-radius: 10px;
  }
  .userDetails {
    display: flex;
    & > div:last-of-type {
      margin: 0 auto;
      span {
        font-weight: 1000;
      }
    }
    gap: 1rem;
    .avater {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      & > img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .username {
      text-align: start;

      h5 {
        margin: 0;
        color: #3a4374;
      }
      p {
        margin: 0;
        font-size: 13px;
        color: #647196;
      }
    }
  }
`;
