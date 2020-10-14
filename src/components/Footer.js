import React from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
  <footer className="bg-dark text-white">
    <div>
      <div className="social-media container">
        <Row>
          <Col className="text-center mt-4">
            <a href="https://www.facebook.com/TheSJEI/" target="blank" className="mr-2">
              <SocialIcon network="facebook" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
            <a href="https://twitter.com/thesjei" target="blank" className="mr-2">
              <SocialIcon network="twitter" bgColor="white" className="icons" style={{ height: 40, width: 40 }} />
            </a>
            <a href="https://www.instagram.com/thesjei/" target="blank" className="mr-2">
              <SocialIcon network="instagram" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
            <a href="https://www.linkedin.com/company/sjei/" target="blank" className="mr-2">
              <SocialIcon network="linkedin" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
            <a href="https://medium.com/the-social-justice-engineering-initiative" target="blank">
              <SocialIcon network="medium" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
          </Col>
        </Row>
      </div>
      <div className="bottom">
        <div className="mt-3">
          <p className="text-center">THE SOCIAL JUSTICE + ENGINEERING INITIATIVE, 2 NORTH CENTRAL AVENUE, SUITE 1800, PHOENIX, AZ, 85004,</p>
          <p className="text-center">ITE 1800, PHOENIX, AZ, 85004,</p>

          <p className="text-center">The Social Justice + Engineering Initiative is a 501 (c)(3) non-profit organization.</p>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
