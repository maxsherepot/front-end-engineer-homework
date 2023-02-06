import React, { PureComponent } from "react";
import PropTypes from "prop-types";


export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="input-group input-group-lg p-2 pt-0">
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
