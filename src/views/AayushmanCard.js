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
import Button from 'react-bootstrap/Button';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; 

export default function AayushmanCard() {
 
   const history = useHistory();

   const handleRechargeClick100 = () => {
      history.push("/payment")
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
                  100 RS PLAN<sup>new</sup>
                </Card.Title>
              </Card.Header>

              <Card.Body> 
                <h4  md="2" style={{ backgroundColor: "", fontWeight: "bold" }}>
                  Rs. 100 10 Card Print Lifetime Card Print No Hidden Charge
                  Free 24/7 Support 24/7 Billing
                </h4>
              <br/>
              <Button onClick={handleRechargeClick100} variant="dark">Recharge Now</Button>
               </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
