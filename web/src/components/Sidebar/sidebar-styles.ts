import styled from "styled-components";

export const Container = styled.div`
  background-color: #363431;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 280px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  .button-sidebar {
    transition: 0.2s ease-in-out;

    &:hover {
      transform: rotate(180deg);
      transition: 0.2s ease-in-out;
    }
  }

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
