import styled from "styled-components";

export const Container = styled.div`
  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    background-color: #eee;
    padding: 18px;
    width: 70vw;
    height: 7.5vw;
    background-color: #303030;
    text-align: center;
    border-radius: 1vw;
    transition: 0.4s;
    color: white;
    font-size: 3.5vw;
    position: relative;
    z-index: 3;
    border: 0px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;

    :hover {
      background-color: #ccc;
      cursor: pointer;
    }
  }

  .panel-container {
    width: 70vw;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
    bottom: 7.5vw;
    background-color: ${(props) => (props.wasClicked ? "red" : "blue")};
    animation: ${(props) =>
      props.wasClicked
        ? "slideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
        : "slideOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"};

    .panel {
      padding: 3vw 18px 1vw;
      border-radius: 1vw;
      overflow: hidden;
      background-color: #505050;
      width: 65vw;
      display: flex;
      justify-content: center;
      text-align: justify;
      font-size: 1.2vw;
    }
  }
  @keyframes slideIn {
    100% {
      transform: translateY(6vw);
      opacity: 1;
    }
    0% {
      transform: translateY(1vw);
      opacity: 0;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateY(6vw);
      opacity: 1;
    }
    100% {
      transform: translateY(1vw);
      opacity: 0;
    }
  }
`;
