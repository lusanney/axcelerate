import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { List } from "./List";

const testData = {
  sections: [
    {
      title: "Attended",
      items: [
        {
          id: "1",
          name: "Dianne Russell",
          subtitle: "dianne@example.com",
          avatar: "",
        },
        {
          id: "2",
          name: "Ronald Richards",
          subtitle: "ronald@example.com",
          avatar: "",
          selected: true,
        },
      ],
    },
    {
      title: "Absent",
      items: [
        {
          id: "3",
          name: "Jenny Wilson",
          subtitle: "jenny@example.com",
          avatar: "",
        },
        {
          id: "4",
          name: "Wade Warren",
          subtitle: "wade@example.com",
          avatar: "",
        },
      ],
      collapsed: true,
    },
  ],
};

vi.mock("../../assets/icons", () => ({
  SearchIcon: () => <div data-testid="search-icon" />,
  ChevronIcon: () => <div data-testid="chevron-icon" />,
}));

describe("List Component", () => {
  describe("Base functionality", () => {
    it("renders correctly with standard variant", () => {
      render(<List data={testData.sections} />);

      expect(screen.getByText("Attended")).toBeInTheDocument();
      expect(screen.getByText("Absent")).toBeInTheDocument();
      expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
      expect(screen.getByText("Ronald Richards")).toBeInTheDocument();
      expect(screen.queryByText("Jenny Wilson")).not.toBeVisible();
    });

    it("toggles section collapse on click", () => {
      render(<List data={testData.sections} />);

      expect(screen.queryByText("Jenny Wilson")).not.toBeVisible();
      fireEvent.click(screen.getByText("Absent"));
      expect(screen.getByText("Jenny Wilson")).toBeVisible();
      expect(screen.getByText("Wade Warren")).toBeVisible();
    });

    it("filters items based on search term - by name", () => {
      render(<List data={testData.sections} />);

      const searchInput = screen.getByPlaceholderText("Search");
      fireEvent.change(searchInput, { target: { value: "Dianne" } });
      expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
      expect(screen.queryByText("Ronald Richards")).not.toBeInTheDocument();
      fireEvent.change(searchInput, { target: { value: "" } });
      expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
      expect(screen.getByText("Ronald Richards")).toBeInTheDocument();
    });
  });

  describe("variant prop", () => {
    it("renders subtitle variant correctly", () => {
      render(<List data={testData.sections} variant="subtitle" />);

      expect(screen.getByText("dianne@example.com")).toBeInTheDocument();
      expect(screen.getByText("ronald@example.com")).toBeInTheDocument();
    });

    it("filters items based on search term with subtitle variant", () => {
      render(<List data={testData.sections} variant="subtitle" />);

      const searchInput = screen.getByPlaceholderText("Search");
      fireEvent.change(searchInput, { target: { value: "dianne@" } });
      expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
      expect(screen.queryByText("Ronald Richards")).not.toBeInTheDocument();
      fireEvent.change(searchInput, { target: { value: "" } });
      expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
      expect(screen.getByText("Ronald Richards")).toBeInTheDocument();
    });
  });

  describe("onItemClick prop", () => {
    it("calls onItemClick when an item is clicked", () => {
      const handleItemClick = vi.fn();
      render(<List data={testData.sections} onItemClick={handleItemClick} />);

      fireEvent.click(screen.getByText("Dianne Russell"));
      expect(handleItemClick).toHaveBeenCalledTimes(1);
      expect(handleItemClick).toHaveBeenCalledWith(
        expect.objectContaining({
          id: "1",
          name: "Dianne Russell",
        })
      );
    });
  });

  describe("disableSearch prop", () => {
    it("hides search input when disableSearch is true", () => {
      render(<List data={testData.sections} disableSearch={true} />);

      expect(screen.queryByPlaceholderText("Search")).not.toBeInTheDocument();
      expect(screen.getByText("Dianne Russell")).toBeInTheDocument();
      expect(screen.getByText("Ronald Richards")).toBeInTheDocument();
    });
  });

  describe("renderAvatar prop", () => {
    it("renders custom avatar when provided", () => {
      const CustomAvatar = ({ item }: { item: { id: string } }) => (
        <div data-testid={`custom-avatar-${item.id}`}>Custom</div>
      );
      render(
        <List
          data={testData.sections}
          renderAvatar={(item) => <CustomAvatar item={item} />}
        />
      );
      expect(screen.getByTestId("custom-avatar-1")).toBeInTheDocument();
      expect(screen.getByTestId("custom-avatar-2")).toBeInTheDocument();
    });
  });

  describe("renderActions prop", () => {
    it("renders custom action buttons when provided", () => {
      const ActionButton = ({ item }: { item: { id: string } }) => (
        <button data-testid={`action-${item.id}`}>Action</button>
      );
      render(
        <List
          data={testData.sections}
          renderActions={(item) => <ActionButton item={item} />}
        />
      );
      expect(screen.getByTestId("action-1")).toBeInTheDocument();
      expect(screen.getByTestId("action-2")).toBeInTheDocument();
    });
  });
});
