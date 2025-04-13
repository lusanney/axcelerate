import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

vi.mock("./assets/icons", () => ({
  ShareIcon: () => <span data-testid="share-icon">Share</span>,
  SearchIcon: () => <span data-testid="search-icon">Search</span>,
  ChevronIcon: () => <span data-testid="chevron-icon">Chevron</span>,
}));

describe("App Component", () => {
  const originalWindowOpen = window.open;
  const mockWindowOpen = vi.fn();

  beforeEach(() => {
    window.open = mockWindowOpen;
  });

  afterEach(() => {
    window.open = originalWindowOpen;
    mockWindowOpen.mockClear();
  });

  it("renders the header correctly", () => {
    render(<App />);
    expect(screen.getByText("List Component Demo")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A reusable and customizable list component with search functionality (can be disabled)"
      )
    ).toBeInTheDocument();
  });

  it("renders all three list variants", () => {
    render(<App />);
    expect(screen.getByText("Full look")).toBeInTheDocument();
    expect(screen.getByText("With Action Buttons")).toBeInTheDocument();
    expect(screen.getByText("Search Disabled")).toBeInTheDocument();
  });

  it("renders list items in each variant", () => {
    render(<App />);
    const dianneElements = screen.getAllByText("Dianne Russell");
    expect(dianneElements.length).toBe(3);
  });

  it("shows subtitles in all variants", () => {
    render(<App />);
    expect(screen.getAllByText("dianne@example.com").length).toBe(3);
  });

  it("opens Google search when an action button is clicked", () => {
    render(<App />);

    const actionButtons = screen.getAllByTestId("action-button");
    expect(actionButtons.length).toBeGreaterThan(0);

    fireEvent.click(actionButtons[0]);
    expect(mockWindowOpen).toHaveBeenCalledWith(
      expect.stringContaining("google.com/search"),
      "_blank"
    );
  });

  it("renders a list with search disabled", () => {
    render(<App />);
    
    // Verify the search disabled section exists
    expect(screen.getByText("Search Disabled")).toBeInTheDocument();
    
    // Verify that there's no search input in this section
    const searchInputs = screen.queryAllByPlaceholderText("Search");
    expect(searchInputs.length).toBe(2); // Only 2 search inputs (not 3) should be present
  });
});
