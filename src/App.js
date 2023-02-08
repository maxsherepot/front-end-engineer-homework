import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import emojiList from "./emojiList.json";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      listItems: emojiList,
    };
  }

  handleSearchChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  onAddItem = value => {
    this.setState(({ listItems }) => {
      const newArray = [...listItems, value];
      return { listItems: newArray };
    });
  };

  onEditItem = (newItem, currentItem) => {
    this.setState(({ listItems }) => {
      const newArray = [
        ...listItems.slice(0, currentItem),
        newItem,
        ...listItems.slice(currentItem + 1)
      ];
      return { listItems: newArray };
    });
  };

  onDeleteItem = currentItem => {
    this.setState(({ listItems }) => {
      const newArray = [
        ...listItems.slice(0, currentItem),
        ...listItems.slice(currentItem + 1)
      ];
      return { listItems: newArray };
    });
  };

  render() {
    const { listItems, searchValue } = this.state;
    const visibleItems = filterEmoji(listItems, searchValue, 20);
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults
          emojiData={visibleItems}
          onAddItem={this.onAddItem}
          onEditItem={this.onEditItem}
          onDeleteItem={this.onDeleteItem}
          listItems={this.state.listItems}
        />
      </div>
    );
  }
}
