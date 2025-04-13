import { useState } from "react";
import { List } from "./components/List";
import { ListItemProps } from "./components/List/types";
import { sampleData } from "./data/sampleData";
import { ShareIcon } from "./assets/icons";
import { ActionButton } from "./components/ActionButton";
import "./App.css";

function App() {
  const [data, setData] = useState(sampleData);
  const [actionsData, setActionsData] = useState(sampleData);
  const [nonSearchData, setNonSearchData] = useState(sampleData);

  const handleDataItemClick = (item: ListItemProps) => {
    const updatedSections = data.map((section) => ({
      ...section,
      items: section.items.map((listItem) =>
        listItem.id === item.id
          ? { ...listItem, selected: !listItem.selected }
          : listItem
      ),
    }));

    setData(updatedSections);
  };

  const handleNonSearchDataItemClick = (item: ListItemProps) => {
    const updatedSections = nonSearchData.map((section) => ({
      ...section,
      items: section.items.map((listItem) =>
        listItem.id === item.id
          ? { ...listItem, selected: !listItem.selected }
          : listItem
      ),
    }));

    setNonSearchData(updatedSections);
  };

  const handleActionsItemClick = (item: ListItemProps) => {
    const updatedSections = actionsData.map((section) => ({
      ...section,
      items: section.items.map((listItem) =>
        listItem.id === item.id
          ? { ...listItem, selected: !listItem.selected }
          : listItem
      ),
    }));

    setActionsData(updatedSections);
  };

  const handleShareClick = (item: ListItemProps, e: React.MouseEvent) => {
    e.stopPropagation();

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(item.name)}`,
      "_blank"
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>List Component Demo</h1>
        <p>
          A reusable and customizable list component with search functionality
          (can be disabled)
        </p>
      </header>

      <main>
        <div className="demo-container">
          <div className="variant-container">
            <h2>Full look</h2>
            <List
              data={data}
              variant="subtitle"
              onItemClick={handleDataItemClick}
            />
          </div>

          <div className="variant-container">
            <h2>With Action Buttons</h2>
            <List
              data={actionsData}
              variant="subtitle"
              onItemClick={handleActionsItemClick}
              renderActions={(item) => (
                <ActionButton onClick={(e) => handleShareClick(item, e)}>
                  <ShareIcon />
                </ActionButton>
              )}
            />
          </div>

          <div className="variant-container">
            <h2>Search Disabled</h2>
            <List
              data={nonSearchData}
              variant="subtitle"
              onItemClick={handleNonSearchDataItemClick}
              disableSearch
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
