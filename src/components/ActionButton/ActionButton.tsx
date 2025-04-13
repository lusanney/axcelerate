import React from "react";
import { ActionButtonContainer } from "./ActionButton.styles";

interface ActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <ActionButtonContainer data-testid="action-button" onClick={onClick}>
      {children}
    </ActionButtonContainer>
  );
};

export default ActionButton;
