import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Layout.css';

export default props => (
  <Grid fluid>
    <Row>
      <Col>
        {props.children}
      </Col>
    </Row>
  </Grid>
);
