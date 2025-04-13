import { ListDataProps } from "../components/List/types";

export const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
];

export const sampleData: ListDataProps[] = [
  {
    title: "Attended",
    items: [
      {
        id: "1",
        name: "Dianne Russell",
        subtitle: "dianne@example.com",
        avatar: avatars[0],
      },
      {
        id: "2",
        name: "Ronald Richards",
        subtitle: "ronald@example.com",
        avatar: avatars[1],
        selected: true,
      },
      {
        id: "3",
        name: "Arlene McCoy",
        subtitle: "arlene@example.com",
        avatar: avatars[2],
      },
      {
        id: "4",
        name: "Kathryn Murphy",
        subtitle: "kathryn@example.com",
        avatar: avatars[3],
        selected: true,
      },
      {
        id: "5",
        name: "Savannah Nguyen",
        subtitle: "savannah@example.com",
        avatar: avatars[4],
      },
      {
        id: "6",
        name: "Albert Flores",
        subtitle: "albert@example.com",
        avatar: avatars[5],
      },
    ],
  },
  {
    title: "Absent",
    items: [
      {
        id: "7",
        name: "Jenny Wilson",
        subtitle: "jenny@example.com",
        avatar: avatars[6],
      },
      {
        id: "8",
        name: "Wade Warren",
        subtitle: "wade@example.com",
        avatar: avatars[7],
      },
      {
        id: "9",
        name: "Bessie Cooper",
        subtitle: "bessie@example.com",
        avatar: avatars[0],
      },
      {
        id: "10",
        name: "Ralph Edwards",
        subtitle: "ralph@example.com",
        avatar: avatars[1],
      },
    ],
  },
];
