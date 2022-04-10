import React, { useRef, useState, useEffect } from "react";

import styled from "styled-components";
import { colors } from "../../colors";
import ConnectBtn from "../../components/ConnectBtn";
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
      <Container>
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
  background: rgba(0, 0, 0, 0.1);
  ${({ showModal }) =>
    !showModal &&
    `
    display:none;
    `}
`;

const Button = styled.button``;

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
  height: 90vh;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 5px #c4c4c4;
  @media (max-width: 768px) {
    width: 90vw;
    height: 95vh;
  }
`;
