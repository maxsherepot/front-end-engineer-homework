import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

export default class Pagination extends PureComponent {
  static propTypes = {
    pageCount: PropTypes.number,
    handlePageChange: PropTypes.func
  };

  handlePageChange = selected => {
    this.props.onPageChange(selected);
  };

  render() {
    return (
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={this.props.pageCount}
        onPageChange={this.handlePageChange}
        containerClassName={"pagination justify-content-center mt-4"}
        previousLinkClassName={"pagination-link"}
        nextLinkClassName={"pagination-link"}
        disabledClassName={"pagination-link-disabled"}
        activeClassName={"pagination-link-active"}
      />
    );
  }
}
