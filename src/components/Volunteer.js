import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const Corporate = () => (
  <div className="container">
    <Row>
      <About />
      <Col md={7} className="container">
        <Row className="block">
          <Col>
            <h4>Administrative Assistant Volunteer</h4>
            <p>
              Virtual Opportunity
              Grow with our non-profit organization by
              providing much needed support to our all volunteer
              organization. Help us lay the foundation of this new
              organization and work to provide ...
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
export default Corporate;
