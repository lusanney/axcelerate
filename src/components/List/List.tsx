import React, { useState, useEffect } from "react";
import { SearchIcon as SearchIconSVG, ChevronIcon } from "../../assets/icons";
import { ListProps, ListItemProps, ListDataProps } from "./types";
import {
  ListContainer,
  ListHeader,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SectionHeader,
  SectionTitle,
  SectionIcon,
  SectionContent,
  ListItem,
  Avatar,
  ItemContent,
  ItemName,
  ItemEmail,
} from "./List.styles";

export const List: React.FC<ListProps> = ({
  data,
  variant = "standard",
  onItemClick,
  renderAvatar,
  renderActions,
  disableSearch = false,
}) => {
  const [localData, setLocalData] = useState<ListDataProps[]>(data);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  useEffect(() => {
    if (localSearchTerm) {
      const filteredSections = data.map((section) => {
        const filteredItems = section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
            (item.subtitle &&
              item.subtitle
                .toLowerCase()
                .includes(localSearchTerm.toLowerCase()))
        );
        return {
          ...section,
          items: filteredItems,
          collapsed: filteredItems.length === 0 ? true : false,
        };
      });
      setLocalData(filteredSections);
    } else {
      setLocalData(data);
    }
  }, [localSearchTerm, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
  };

  const toggleSection = (sectionIndex: number) => {
    setLocalData((prev) =>
      prev.map((section, index) =>
        index === sectionIndex
          ? { ...section, collapsed: !section.collapsed }
          : section
      )
    );
  };

  const handleItemClick = (item: ListItemProps) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <ListContainer>
      {!disableSearch && (
        <ListHeader>
          <SearchContainer>
            <SearchIcon>
              <SearchIconSVG />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search"
              value={localSearchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>
        </ListHeader>
      )}

      {localData.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`}>
          <SectionHeader
            $collapsed={section.collapsed}
            $isFirstSection={sectionIndex === 0}
            $noSearch={disableSearch}
            onClick={() => toggleSection(sectionIndex)}
          >
            <SectionTitle>{section.title}</SectionTitle>
            <SectionIcon $collapsed={section.collapsed}>
              <ChevronIcon />
            </SectionIcon>
          </SectionHeader>
          <SectionContent $collapsed={section.collapsed}>
            {section.items.map((item, itemIndex) => {
              return (
                <ListItem
                  key={`item-${item.id || itemIndex}`}
                  $selected={item.selected}
                  onClick={() => handleItemClick(item)}
                >
                  {renderAvatar ? (
                    renderAvatar(item)
                  ) : (
                    <Avatar>
                      {item.avatar ? (
                        <img src={item.avatar} alt={item.name} />
                      ) : (
                        <span>{item.name.charAt(0)}</span>
                      )}
                    </Avatar>
                  )}

                  <ItemContent>
                    <ItemName>{item.name}</ItemName>
                    {variant === "subtitle" && item.subtitle && (
                      <ItemEmail>{item.subtitle}</ItemEmail>
                    )}
                  </ItemContent>

                  {renderActions && renderActions(item)}
                </ListItem>
              );
            })}
          </SectionContent>
        </div>
      ))}
    </ListContainer>
  );
};
