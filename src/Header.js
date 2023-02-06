import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header p-3 d-flex justify-content-center align-items-center">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          alt=""
        />
        <h1 className="mb-0 fw-normal">Emoji Search</h1>
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          alt=""
        />
      </header>
    );
  }
}
