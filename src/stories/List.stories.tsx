import type { Meta, StoryObj } from "@storybook/react";
import { List } from "../components/List";
import { ShareIcon } from "../assets/icons";
import { ActionButton } from "../components/ActionButton";
import { ListItemProps } from "../components/List/types";

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
];

const sampleData = {
  attendedSection: {
    title: "Attended",
    items: [
      {
        id: "1",
        name: "Dianne Russell",
        subtitle: "dianne@hotmail.com",
        avatar: avatars[0],
      },
      {
        id: "2",
        name: "Ronald Richards",
        subtitle: "ronald@hotmail.com",
        avatar: avatars[1],
        selected: true,
      },
      {
        id: "3",
        name: "Arlene McCoy",
        subtitle: "arlene@hotmail.com",
        avatar: avatars[2],
      },
      {
        id: "4",
        name: "Kathryn Murphy",
        subtitle: "kathryn@hotmail.com",
        avatar: avatars[3],
        selected: true,
      },
      {
        id: "5",
        name: "Savannah Nguyen",
        subtitle: "savannah@hotmail.com",
        avatar: avatars[4],
      },
      {
        id: "6",
        name: "Albert Flores",
        subtitle: "albert@hotmail.com",
        avatar: avatars[5],
      },
    ],
  },
  absentSection: {
    title: "Absent",
    items: [
      {
        id: "7",
        name: "Jenny Wilson",
        subtitle: "jenny@hotmail.com",
        avatar: avatars[6],
      },
      {
        id: "8",
        name: "Wade Warren",
        subtitle: "wade@hotmail.com",
        avatar: avatars[7],
      },
      {
        id: "9",
        name: "Bessie Cooper",
        subtitle: "bessie@hotmail.com",
        avatar: avatars[0],
      },
      {
        id: "10",
        name: "Ralph Edwards",
        subtitle: "ralph@hotmail.com",
        avatar: avatars[1],
      },
    ],
  },
};

const handleShareClick = (item: ListItemProps, e: React.MouseEvent) => {
  e.stopPropagation();
  console.log(`Opening search for: ${item.name}`);
};

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "subtitle"],
      description:
        "Determines the display style of list items. Use 'subtitle' to display the subtitle field below the name.",
    },
    disableSearch: {
      control: "boolean",
      description:
        "When set to true, hides the search input at the top of the list.",
    },
    onItemClick: {
      action: "itemClicked",
      description: "Callback when a list item is clicked",
    },
    renderAvatar: {
      description:
        "Custom function to render the avatar section. Receives the list item as parameter.",
    },
    renderActions: {
      description:
        "Custom function to render action buttons at the end of each list item. Receives the list item as parameter.",
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// Standard List
export const Standard: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: false },
    ],
    variant: "standard",
  },
};

// Subtitle Variant
export const SubtitleVariant: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: false },
    ],
    variant: "subtitle",
  },
};

// Collapsed Sections
export const CollapsedSections: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: true },
    ],
    variant: "standard",
  },
};

// With Custom Actions
export const WithActions: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: false },
    ],
    variant: "subtitle",
    renderActions: (item) => (
      <ActionButton onClick={(e) => handleShareClick(item, e)}>
        <ShareIcon />
      </ActionButton>
    ),
  },
};

// With Custom Avatar
export const WithCustomAvatar: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: false },
    ],
    variant: "subtitle",
    renderAvatar: (item) => (
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          backgroundColor: "#4285f4",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          marginRight: "12px",
        }}
      >
        {item.name.substring(0, 2).toUpperCase()}
      </div>
    ),
  },
};

// Without Search
export const WithoutSearch: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: false },
    ],
    variant: "subtitle",
    disableSearch: true,
  },
};

// With Both Custom Actions and Avatar
export const FullyCustomized: Story = {
  args: {
    data: [
      { ...sampleData.attendedSection, collapsed: false },
      { ...sampleData.absentSection, collapsed: false },
    ],
    variant: "subtitle",
    renderAvatar: (item) => (
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          backgroundColor: "#4285f4",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          marginRight: "12px",
        }}
      >
        {item.name.substring(0, 2).toUpperCase()}
      </div>
    ),
    renderActions: (item) => (
      <ActionButton onClick={(e) => handleShareClick(item, e)}>
        <ShareIcon />
      </ActionButton>
    ),
  },
};
