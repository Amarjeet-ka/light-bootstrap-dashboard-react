import React from "react";

// react-bootstrap components
import {
  Badge,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from 'react-bootstrap/Button';

export default function VoterAdvance() {

  const history  = useHistory();

  const handleRechargeClick200 =() => {
    history.push('/payment1')
  } 

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="" md="3">
            <Card>
              <Card.Header
                style={{ backgroundColor: "", textAlign: "center" }}
              >
                <Card.Title
                  as="h5"
                  style={{ backgroundColor: "", fontWeight: "bold" }}
                >
                  200 RS PLAN<sup>new</sup>
                </Card.Title>
              </Card.Header>

              <Card.Body> 
                <h4  md="2" style={{ backgroundColor: "", fontWeight: "bold" }}>
                  Rs. 200 10 Card Print Lifetime Card Print No Hidden Charge
                  Free 24/7 Support 24/7 Billing
                </h4>
              <br/>
              <Button  onClick={handleRechargeClick200} variant="dark">Recharge Now</Button>
               </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
