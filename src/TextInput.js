import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class TextInput extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  render() {
    const { label, name, placeholder, required, value, onChange } = this.props;
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          required={required}
          id={name}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    );
  };
};
