import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Component } from 'react';
import { connect } from 'react-redux';
import PageItem from 'react-bootstrap/PageItem';
import { changePage } from '../store/actions/actions';

class Paginator extends Component {

  constructor(props) {
    super(props)
    this.active = 1;
  }

  handleChangePage(event) {
    console.log(event.target.text);
    this.props.changePage(event.target.text);
    this.active = event.target.text;
  }

  render() {
    console.log('@Paginator @render');
    let items = [];
    let view = this.props.view;
    if (view.Response === "True") {
      let count = view.totalResults;
      let pageCount = count / 10;
      if (pageCount * 10 < count) {
        pageCount++;
      }
      for (let page = 1; page <= pageCount; page++) {
        items.push(
          <Pagination.Item key={page} active={page === this.active}  >
            {page}
          </Pagination.Item>,
        );
      }
    }
    return (
      <div>
        <Pagination onClick={this.handleChangePage.bind(this)} >{items}</Pagination>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view.view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: (page) => dispatch(changePage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);



