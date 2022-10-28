import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: #201f1e;
  color: white;

  font-size: 20px;

  padding: 15px;
  margin: 0 15px 20px;

  cursor: pointer;

  border-radius: 10px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`;
