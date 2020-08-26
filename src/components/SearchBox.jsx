import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { getView } from '../store/actions/actions';
import { connect } from 'react-redux';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange(lexem) {
    this.props.getView(lexem);
  }

  render() {
    return (
      
      <InputGroup>
        <FormControl
          placeholder="typing title of movie ... "
          aria-label="search"
          aria-describedby="search"

          onChange={event => this.handleChange(event.target.value)}
        />
      </InputGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view.view,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getView: (lexem) => dispatch(getView(lexem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
