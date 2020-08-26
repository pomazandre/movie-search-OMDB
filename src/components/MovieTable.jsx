import React from 'react';
import Table from 'react-bootstrap/Table';
import { Component } from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';


class MovieTable extends Component {

  render() {
    console.log('>> render @MovieTable');
    console.log('>> состояние');
    let view = this.props.view;
    console.log(view);
    console.log(view.Response);
    console.log(view.totalResults);
    if (view.Response === "True") {
      console.log('число строк = ' + view.totalResults);
      console.log(view.Search);
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>poster</th>
              <th>name</th>
              <th>imdbID</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {view.Search.map((item, index) =>
              <tr key={item.imdbID}>
                {item.Poster !== "N/A" ? (<td><Image src={item.Poster} thumbnail /></td>) :
                  (<td>image n/a</td>)}
                <td>{item.Title}</td>
                <td>{item.imdbID}</td>
                <td>{item.Type}</td>
              </tr >

            )}
          </tbody>
        </Table>)
    } else {
      console.log('таблица пуста');
      return (
        <div>
          {
            this.props.progress === 1 ?
              <Spinner animation="border" />
              : <p>no search results</p>
          }
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  return {
    view: state.view.view,
    progress: state.view.progress,

  }
}

export default connect(mapStateToProps)(MovieTable);



