import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const TakeAction = () => (
  <div className="container">
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <p className="youcanmake text-center">
          You can make a difference. Our work will help ensure future development
          limits or eliminates negative impacts on our environment and fellow human.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>SUPPORT</h5>
        <p>
          Your donation allows us to perform research, ensure sustainable
          engineering practices and methods are being performed while ensuring
          social and environmental justice. Help us get off the ground!
        </p>
        <p>
          <a className="anchor-t" href="https://secure.squarespace.com/checkout/donate?donatePageId=5939bc3c6b8f5b104ec81d05&ss_cid=fdc436da-1cc7-4cb0-aed5-3a5742cfec1f&ss_cvisit=1596857972140&ss_cvr=9d5e9807-f2ec-48d4-971c-e23d41f91dd9%7C1596832794660%7C1596848334690%7C1596857972833%7C3">
            Make a donation
          </a>
        </p>
      </Col>
      <Col>
        <h5>VOLUNTEER</h5>
        <p>
          Tell your friends and family. There&apos;s no better way to
          make an impact than to become informed yourself. Join now and make an impact!
        </p>
        <div>
          <NavLink to="/volunteer" className="mr-4 anchor-t">Join the Initiative</NavLink>
        </div>
      </Col>
    </Row>
  </div>
);
export default TakeAction;
