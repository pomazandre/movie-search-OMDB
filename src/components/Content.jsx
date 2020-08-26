import React from 'react';
import MovieTable from './MovieTable';
import Card from 'react-bootstrap/Card';
import Paginator from './Paginator';

export default function Content() {
  return (
    <Card>
      <Card.Body>
        <MovieTable />
        <Paginator />
      </Card.Body>
    </Card>
  )


}
