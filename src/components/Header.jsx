import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBox from './SearchBox';
import LoginBox from './LoginBox';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-right">
          <Col ><h3>Search movie in OMDB</h3></Col>
          <Col md="auto">
            <SearchBox />
          </Col>
          <Col md="auto">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
