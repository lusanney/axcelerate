import styled from "styled-components";

export const ActionButtonContainer = styled.div`
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  color: #555;
  position: relative;

  &:hover {
    background-color: #f0f4ff;
    box-shadow: 0 0 0 1px #4285f4;
    color: #4285f4;
    transform: scale(1.1);
  }
`;
