import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import CategoryWidget from "../../components/categorywidget";
import ConnectBtn from "../../components/ConnectBtn";
import LoginConnect from "../../components/loginBtnConnector";
import RoadMap from "../../components/roadmap";
import { motion } from "framer-motion";
const AsideWidget = ({ filter, setFilter, showModal, SetShowModal }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const [isOpen, setIsOpen] = useState(false);

  const [style, setStyle] = useState({
    display: "none",
    opacity: "0",
    zIndex: "2",
  });
  const handleHamburgerMenu = () => {
    setIsOpen(!isOpen);
    setStyle({ display: "flex", opacity: "1" });
  };
  const closeHamburgerMenu = () => setStyle({ display: "none", opacity: "0" });
  return (
    <AsideWidgetWrap
      as={motion.aside}
      transition={{ delay: 0.15, type: "tween", duration: 1 }}
    >
      <div className="bigScreen">
        <div className="flex-col">
          <div className="login">
            <LoginConnect showModal={showModal} SetShowModal={SetShowModal} />
          </div>
          <Banner
            style={{
              backgroundImage: `url("/images/bgH.png")`,
            }}
          >
            <span>
              <h1>Review Rabbit</h1>
              <span>Feedback Board</span>
            </span>
          </Banner>
        </div>
        <CategoryWidget filter={filter} setFilter={setFilter} />
        <RoadMap />
      </div>
      <div
        style={{
          padding: "1rem",
          position: "relative",
        }}
        className="smallScreen"
      >
        <Banner
          style={{
            width: "unset",
            height: "fit-content",
            padding: "unset",
            borderRadius: "unset",
          }}
        >
          <span>
            <h1>Review Rabbit</h1>
            <span>Feedback Board</span>
          </span>
        </Banner>
        {style.display === "none" ? (
          <i
            className="fas fa-bars fa-2x"
            style={{ color: "#fff" }}
            onClick={handleHamburgerMenu}
          ></i>
        ) : (
          <i
            className="fas fa-times fa-2x"
            style={{ color: "#fff" }}
            onClick={closeHamburgerMenu}
          ></i>
        )}
        <div style={style}>
          <div className="hamBurger"></div>
          <MenuWrapper>
            <div className="flex-col">
              <div className="login">
                <LoginConnect
                  showModal={showModal}
                  SetShowModal={SetShowModal}
                />
              </div>
            </div>
            <CategoryWidget filter={filter} setFilter={setFilter} />
            <RoadMap />
          </MenuWrapper>
        </div>
      </div>
    </AsideWidgetWrap>
  );
};

export default AsideWidget;

const AsideWidgetWrap = styled(motion.aside)`
  @media screen and (max-width: 769px) {
    width: 100vw;
  }
  .bigScreen {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media screen and (max-width: 769px) {
      display: none;
    }
    @media screen and (max-width: 939px) and (min-width: 771px) {
      flex-direction: row;
      width: 80w;
    }
    .flex-col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .login {
      border-radius: 10px;
      padding: 20px;
      background: #fff;
    }
  }
  .smallScreen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: fit-content;

    background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      rgb(232, 77, 112) 0%,
      rgb(163, 55, 246) 53.09%,
      rgb(40, 167, 237) 100%
    );
    @media screen and (min-width: 770px) {
      display: none;
    }
    .hamBurger {
      position: absolute;
      height: 90.5vh;
      width: 100%;
      left: 0%;
      top: 10.5vh;
      z-index: 1;
      background: #333333;
      opacity: 0.8;
      display: flex;
      align-items: flex-end;
      justify-content: end;
    }
    .fade-in {
      transition: opacity 2s ease;
    }
    .fade-out {
      opacity: 0;
      transition: opacity 2s ease;
    }
  }
`;
const MenuWrapper = styled.div`
  transition: all 0.4s ease-in-out;
  width: fit-content;
  padding: 1rem;
  background: ${colors.general_bg};
  height: calc(90.5vh - 2rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
  right: 0%;
  top: 10.5vh;
  position: absolute;
  .login {
    padding: 1rem;
    background: ${colors.white};
    border-radius: 10px;
  }
`;

const Banner = styled.div`
  width: 208px;
  height: 6rem;
  padding: 20px;
  border-radius: 10px;

  background: contain no-repeat;
  display: flex;
  justify-content: space-between;
  & > span {
    display: flex;
    flex-flow: column;
    margin-top: 20%;
    @media screen and (max-width: 939px) and (min-width: 771px) {
      margin-top: 0;
    }
    @media screen and (max-width: 700px) {
      margin-top: 0;
      gap: 0rem;
    }
    gap: 0.4rem;
    h1,
    span {
      margin: 0;
      color: ${colors.white};
    }
    span {
      font-weight: bold;
      color: #d7d8fc;
    }
  }
  @media screen and (max-width: 939px) and (min-width: 771px) {
    height: 3rem;
  }
`;
