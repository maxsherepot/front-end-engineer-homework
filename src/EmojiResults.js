import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";
import Pagination from "./Pagination";

export default class EmojiResults extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  };

  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  };

  componentWillUnmount() {
    this.clipboard.destroy();
  };

  handlePageChange = ({ selected }) => {
    this.setState({
      currentPage: selected
    });
  };

  render() {
    const itemsPerPage = 5;
    const offset = this.state.currentPage * itemsPerPage;
    const pageCount = Math.ceil(this.props.emojiData.length / itemsPerPage);
    const currentPageData = this.props.emojiData.slice(offset, offset + itemsPerPage);

    return (
      <div className="component-emoji-results">
        {currentPageData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
        {
          this.props.emojiData.length > itemsPerPage &&
          <Pagination
            pageCount={pageCount}
            onPageChange={this.handlePageChange}
          />
        }
      </div>
    );
  }
}
