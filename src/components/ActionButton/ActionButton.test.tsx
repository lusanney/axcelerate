import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ActionButton } from "./ActionButton";

describe("ActionButton Component", () => {
  it("renders children correctly", () => {
    render(
      <ActionButton onClick={() => {}}>
        <span data-testid="test-child">Test Child</span>
      </ActionButton>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  describe("onClick prop", () => {
    it("calls onClick handler when clicked", () => {
      const handleClick = vi.fn();

      render(
        <ActionButton onClick={handleClick}>
          <span>Click Me</span>
        </ActionButton>
      );

      fireEvent.click(screen.getByText("Click Me"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
