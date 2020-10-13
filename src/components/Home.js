import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Home = () => (
  <div className="container">
    <Row>
      <Col lg={12}>
        <h3>WHAT WE DO</h3>
        <p>
          Our organization seeks to research, develop,
          and implement engineering practices, designs, products,
          and methods that promote social and environmental justice
          and overall sustainability. Further, we strive to educate,
          advocate, plan and engineer the future development of our cities,
          towns, neighborhoods, farms - our planet. We will obtain our goals
          in a way that is respectful and sensitive, and in a manner that treats
          all inhabitants equally and fairly according to the definitions of social justice,
          environmental justice, and the ethical principles adhered to by engineers.
          Find out how you can help.
        </p>
      </Col>
    </Row>
    <Row>
      Subscribe
    </Row>
    <Row>
      <Col>
        <h3>Environmental Justice</h3>
        <p>Environmental justice is the fair treatment and meaningful involvement of all people regardless of race, color, national origin, or income, with respect to the development, implementation, and enforcement of environmental laws, regulations, and policies, (EPA).</p>
        <p>We will take this a step further and include the consideration of all inhabitants, including animals.</p>
      </Col>
      <Col>
        <h3>Ethical Engineering</h3>
        <p>
          Engineers, in the fulfillment of their professional duties,
          shall: Hold paramount the safety, health, and welfare of the public.
        </p>
        <p>
          Perform services only in areas of their competence.
          Issue public statements only in an objective and truthful manner.
        </p>
        <p>
          Act for each employer or client as faithful agents or trustees.
          Avoid deceptive acts. Conduct themselves honorably, responsibly, 
          ethically, and lawfully so as to enhance the honor, reputation, 
          and usefulness of the profession. (I. Fundamental Cannons, National
          Society of Professional Engineers).
        </p>
        <p>Each of these cannons completely compliments social and environmental justice. </p>
        <p>
          Our initial work will be to compose these three similar definitions
          and subjects into a guiding principles that will allow our
          organization to fulfill our goals and bylaws.
        </p>
      </Col>
      <Col>
        <h3>Social Justice</h3>
        <p>The fair and proper administration of laws conforming to the natural law that all persons, irrespective of ethnic origin, gender, possessions, race, religion, etc., are to be treated equally and without prejudice, (Business Directory). </p>
        <p>Further, social justice is the virtue which guides us in creating those organized human interactions we call institutions. </p>
        <p>In turn, social institutions, when justly organized, provide us with access to what is good for the person, both individually and in our associations with others. </p>
        <p>Social justice also imposes on each of us a personal responsibility to work with others, at whatever level of the “Common Good” in which we participate, to design and continually perfect our institutions as tools for personal and social development, (Center for Economic and Social Justice).</p>
      </Col>
    </Row>
  </div>
);
export default Home;
