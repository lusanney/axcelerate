export interface ListItemProps {
  id: string;
  name: string;
  subtitle?: string;
  avatar?: string;
  selected?: boolean;
  metadata?: Record<string, unknown>;
}

export interface ListDataProps {
  title: string;
  items: ListItemProps[];
  collapsed?: boolean;
}

export interface ListProps {
  data: ListDataProps[];
  variant?: "standard" | "subtitle";
  onItemClick?: (item: ListItemProps) => void;
  disableSearch?: boolean;
  renderAvatar?: (item: ListItemProps) => React.ReactNode;
  renderActions?: (item: ListItemProps) => React.ReactNode;
}
