import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="card d-flex flex-row align-items-center justify-content-between component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <div className="d-flex align-items-center">
          <img src={src} className="mx-2" alt={this.props.title} />
          <h6 className="my-3">{this.props.title}</h6>
        </div>
        <p className="card-text mx-2">
          <small className="text-muted info">Click to copy emoji</small>
        </p>
      </div>
    );
  }
}
