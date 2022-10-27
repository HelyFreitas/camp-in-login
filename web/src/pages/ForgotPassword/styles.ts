import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #24221f;

  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  h1 {
    color: #94a3b8;

    @media screen and (max-width: 330px) {
      font-size: 25px;
    }
  }

  .linkBack {
    color: #ffc632;
    transition: 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.6);
      transition: 0.8s ease-in-out;
    }
  }

  .sendBtn {
    width: 334px;
    height: 51px;

    background-color: #ffc632;
    color: #473404;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    letter-spacing: 0.015em;
    text-transform: uppercase;

    border: none;
    border-radius: 4px;

    margin-bottom: 20px;

    transition: 0.4s ease-in-out;

    @media screen and (max-width: 488px) {
      width: 260px;
    }

    &:hover {
      filter: brightness(0.6);
      transition: 0.4s ease-in-out;
    }
  }

  .input-email,
  .input-pass {
    display: flex;
    flex-direction: column;
  }

  .inputs-icon-email,
  .inputs-icon-pass {
    position: relative;
  }

  input {
    width: 334px;

    padding: 10px;
    padding-left: 25px;

    margin-bottom: 20px;

    background-color: transparent;

    outline: none;
    border: 1px solid #94a3b8;
    border-radius: 4px;

    color: #94a3b8;
    font-size: 14px;

    transition: .4s ease-in-out;

    &:focus {
      border: 1px solid #ffc632;
      transition: .4s ease-in-out;
    }

    @media screen and (max-width: 488px) {
      width: 260px;
    }
  }

  .envelope,
  .locksimple {
    position: absolute;
    top: 9px;
    padding-left: 4px;
  }

  .envelope polyline, path{
    &:hover{
      stroke: red;
    }
  }

  .label-input-email,
  .label-input-pass {
    color: #afb6c2;

    margin-bottom: 10px;
  }
`;
