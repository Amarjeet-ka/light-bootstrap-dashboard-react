import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import r from '../assets/img/upilogo.png'
import s from '../assets/img/paylogo.png'
import q from '../assets/img/qrcode.png'

export default function Payment() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Col md="6">
          <Card>
            <Card.Header style={{ backgroundColor: "#f8f9fa", textAlign: "center" }}>
              <Card.Title as="h5" style={{ fontWeight: "bold" }}>
                Print Service
              </Card.Title>
              <hr />
              <h5>Total Amount <strong>₹ 599</strong></h5>
            </Card.Header>
            <Card.Body>
              <h5 style={{ textAlign: 'center', fontWeight: "bold" }}>
                Scan QR code using BHIM or your preferred UPI app
              </h5>
              <br />
             <p  style={{ textAlign: 'center' }}  > 
             <img
                src={r}
                alt="UPI Logo"
                width={450}
                height="auto"
              />
             </p>
              <br /><br />
             <p style={{ textAlign: 'center' }}  >
             <img
                src={q}
                alt="QR Code"
                width={280}
              />
             </p>
              <hr />
              <h6 style={{ textAlign: 'center' }} >Powered by</h6>
              <img
                src={s}
                alt="Pay Logo"
                width={150}
                style={{ display: 'block', margin: '0 auto' }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
