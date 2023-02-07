import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TextArea.css";

export default class TextArea extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  render() {
    const { label, name, placeholder, value, onChange } = this.props;

    return (
      <div className="form-floating mb-3 textarea">
        <textarea
          className="form-control"
          placeholder={placeholder}
          id={name}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  };
};
