import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";
import Pagination from "./Pagination";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

export default class EmojiResults extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      isOpenModal: false,
      title: "",
      symbol: "",
      keywords: ""
    };
  };

  static propTypes = {
    emojiData: PropTypes.array,
    onAddItem: PropTypes.func
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

  onSubmit = event => {
    event.preventDefault();
    const emojiValue = {
      title: this.state.title,
      symbol: this.state.symbol,
      keywords: this.state.keywords
    };
    this.props.onAddItem(emojiValue);
    this.setState({
      isOpenModal: false,
      title: "",
      symbol: "",
      keywords: ""
    });
  };

  render() {
    const itemsPerPage = 5;
    const offset = this.state.currentPage * itemsPerPage;
    const pageCount = Math.ceil(this.props.emojiData.length / itemsPerPage);
    const currentPageData = this.props.emojiData.slice(offset, offset + itemsPerPage);

    return (
      <div className="component-emoji-results">
        {this.state.isOpenModal &&
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Emoji modal</h1>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => this.setState({ isOpenModal: false })}></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.onSubmit}>
                    <TextInput
                      label='Title:'
                      name='title'
                      placeholder='Please enter title'
                      value={this.state.title}
                      onChange={value => this.setState({ title: value })}
                    />
                    <TextInput
                      label='Symbol:'
                      name='symbol'
                      placeholder='Please enter symbol'
                      value={this.state.symbol}
                      onChange={value => this.setState({ symbol: value })}
                      required
                    />
                    <TextArea
                      label='Keywords:'
                      name='keywords'
                      placeholder='Please enter keywords'
                      value={this.state.keywords}
                      onChange={value => this.setState({ keywords: value })}
                    />
                    <div className="d-flex justify-content-end mt-3">
                      <button type="button" className="btn btn-secondary m-1" onClick={() => this.setState({ isOpenModal: false })}>Close</button>
                      <button type="submit" className="btn btn-primary m-1">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        }
        {currentPageData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
        <div className="d-flex justify-content-start align-items-center mt-2">
          <button type="button" className="m-3 btn btn-primary" onClick={() => this.setState({ isOpenModal: true })}>
            Add emoji
          </button>
          {this.props.emojiData.length > itemsPerPage &&
            <Pagination
              pageCount={pageCount}
              onPageChange={this.handlePageChange}
            />
          }
        </div>
      </div>
    );
  }
}
