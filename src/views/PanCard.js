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
import Button from "react-bootstrap/Button";
export default function PanCard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="" md="3">
          <Card style={{backgroundColor:'purple'}}>
              <Card.Header style={{ backgroundColor: "", textAlign: "center" }}>
                <Card.Title
                  as="h5"
                  style={{ backgroundColor: "", fontWeight: "bold" }}
                >
                  Retailer
                </Card.Title>
              </Card.Header>

              <Card.Body>
                <h4 md="2" style={{ backgroundColor: "", fontWeight: "bold" }}>
                  Rs. 299 Lifetime Free Print Unlimited Points Free Updates
                  Anytime Recharge No Hidden Charge Free 24/7 Support 24/7
                  Billing
                </h4>
                <br />
                <Button variant="dark" style={{backgroundColor:'black'}} > Recharge Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" md="3">
          <Card style={{backgroundColor:'green'}}>
              <Card.Header style={{ backgroundColor: "", textAlign: "center" }}>
                <Card.Title
                  as="h4"
                  style={{ backgroundColor: "", fontWeight: "bold" }}
                >
                  DISTRIBUTER
                </Card.Title>
              </Card.Header>

              <Card.Body>
                <h4 md="2" style={{ backgroundColor: "", fontWeight: "bold" }}>
                  Rs. 699 Lifetime Free Print Unlimited Points Create Unlimited
                  RETAILER Anytime Recharge No Hidden Charge Free 24/7 Support
                  24/7 Billing
                </h4>
                <br />
                <Button variant="dark" style={{backgroundColor:'black'}} > Recharge Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" md="3">
          <Card style={{backgroundColor:'pink'}}>
              <Card.Header style={{ backgroundColor: "", textAlign: "center" }}>
                <Card.Title
                  as="h5"
                  style={{ backgroundColor: "", fontWeight: "bold" }}
                >
                  SUPER DISTRIBUTER
                </Card.Title>
              </Card.Header>

              <Card.Body>
                <h4 md="2" style={{ backgroundColor: "", fontWeight: "bold" }}>
                  Rs. 999 Lifetime Free Print Unlimited Points Create Unlimited
                  RETAILER, DISTRIBUTER Anytime Recharge No Hidden Charge Free
                  24/7 Support 24/7 Billing
                </h4>
                <br />
                <Button variant="dark" style={{backgroundColor:'black'}} > Recharge Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" md="3">
            <Card style={{backgroundColor:'red'}}>
              <Card.Header style={{ backgroundColor: "", textAlign: "center" }}>
                <Card.Title
                  as="h5"
                  style={{ backgroundColor: "", fontWeight: "bold" }}
                >
                  CHANNEL PARTNER
                </Card.Title>
              </Card.Header>

              <Card.Body>
                <h4 md="2" as="h6" style={{ backgroundColor: "", fontWeight: "bold" }}>
                  Rs. 1299 Lifetime Free Print Unlimited Points Create Unlimited
                  RETAILER, DISTRIBUTER, SUPER - DISTRIBUTER Anytime Recharge No
                  Hidden Charge Free 24/7 Support 24/7 Billing
                </h4>
                <br />
                <Button variant="dark" style={{backgroundColor:'black'}} > Recharge Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
