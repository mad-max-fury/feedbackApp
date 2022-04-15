import React, { useRef, useState, useEffect } from "react";

import styled from "styled-components";
import { colors } from "../../colors";
import ConnectBtn from "../../components/ConnectBtn";
import InputField from "../../components/inputfield";
const EditProfile = ({ showModal, SetShowModal }) => {
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleClick = (e) => {
    fileInputRef.current.click();
    console.log(e.target.files[0]);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(fileInputRef.current.files);
  };
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <EditProfileWrap showModal={showModal}>
      <Container showModal={showModal}>
        <ProfileImage>
          <input
            type={"file"}
            ref={fileInputRef}
            accept={"image/*"}
            style={{ display: "none" }}
            onChange={handleImage}
          />
          <img src={preview} alt="profile" />
          <div>
            <ConnectBtn
              className="selectBtn"
              OnClick={handleClick}
              text={"choose photo"}
            />
            <Button>Remove photo</Button>
          </div>
        </ProfileImage>
        <ProfileDetails>
          <InputField
            type={"text"}
            disabled={true}
            placeholder=" FullName: Mad Max Fury"
          />
          <InputField
            type={"text"}
            disabled={true}
            placeholder="UserName: madmax80"
          />
          <InputField
            type={"text"}
            disabled={true}
            placeholder="Email: madmax80@gmail.com"
          />
          <InputField
            type={"text"}
            disabled={true}
            placeholder={"Phone: 09035658752"}
          />
          <div>
            <Button disabled={true}>
              <span>See All Activities</span>
            </Button>
            <ConnectBtn text={"Edit"} />
          </div>
          <AButton onClick={() => SetShowModal(false)}>Go Back Home</AButton>
        </ProfileDetails>
      </Container>
    </EditProfileWrap>
  );
};

export default EditProfile;

const EditProfileWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 20;
  display: flex;
  top: 0%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);

  ${({ showModal }) =>
    !showModal &&
    `
    transition: all 0.3s ease-in-out;
    opacity:0;
    z-index:-20;
    transform: scale(0);
  
    `}
`;
const AButton = styled.button`
  background: ${"#000"};
  padding: 1rem;
  border-radius: 15px;
  outline: 0;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(0.96);
  }
`;

const Button = styled.button`
  background: ${colors.main_color};
  color: #fff;
  width: fit-content;
  padding: 1rem;
  border-radius: 10px;
  outline: 0;
  font-size: 1rem;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    padding: 0 1.05rem;
    width: fit-content;
    cursor: pointer;
    background: #c75af6;
    height: 2.8rem;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 70%;
  margin: 1rem auto;
  height: 18rem;
  gap: 0.5rem;
  & > div {
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;

    &: hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      transform: scale(0.96);
    }
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  width: 70%;
  margin: 1rem auto;
  height: 18rem;
  & > img {
    height: 200px;
    width: 200px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #f5f5f7;
    object-fit: cover;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: auto;
    width: 70%;
    & > div,
    & > button {
      width: fit-content;
      padding: 0 1rem;
      border-radius: 10px;
      outline: 0;
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        transition: all 0.3s ease-in-out;
        padding: 0 1.05rem;
        width: fit-content;
        cursor: pointer;
        background: #c75af6;
        height: 2.8rem;
      }
    }
    & > button {
      background: ${colors.main_color};
      color: #fff;
    }
  }
`;

const Container = styled.div`
  width: 40vw;
  border-radius: 10px;
  height: 95vh;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 5px #c4c4c4;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition-delay: 0.3s;

  ${({ showModal }) =>
    !showModal &&
    `
  transition-delay: 0.3s;

    transition: all 0.3s ease-in-out;
    transform: scale(0);
 
    `}
  @media (max-width: 768px) {
    width: 90vw;
    height: 95vh;
  }
`;
