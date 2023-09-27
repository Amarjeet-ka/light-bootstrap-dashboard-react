import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function VoterMannual() {
  return (
    <>
      <Container fluid>
        <Row>
          <h5 style={{ fontWeight: "bold" }}>
            आधार कार्ड मैन्युअल बनाने के लिए फोटो सहित डाटा निकालने हेतु नीचे
            डाटा कैप्चर पर क्लिक करें
          </h5>
          <Col md="10">
            <Card>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Police Station (थाना)</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Enter Police Station"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Pincode(पिनकोड)</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Enter Pincode"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>District (जिला )
</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Enter District"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label> Tahshil (ब्लॉक)</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="
                          Enter 
                          Tahshil 
                          "
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Aadhar Card No.</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder="Aadhar Card No."
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Father/Husband</label>
                        <Form.Control as="select">
                          <option value="father">Father</option>
                          <option value="husband">Husband</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Languages Spoken</label>
                        <Form.Control as="select">
                          <option value="hindi">Hindi</option>
                          <option value="english">English</option>

                          <option value="bengali">Bengali</option>
                          <option value="telugu">Telugu</option>
                          <option value="marathi">Marathi</option>
                          <option value="tamil">Tamil</option>
                          <option value="urdu">Urdu</option>
                          <option value="punjabi">Punjabi</option>
                          <option value="kannada">Kannada</option>
                          <option value="malayalam">Malayalam</option>
                          <option value="gujarati">Gujarati</option>
                          <option value="odia">Odia</option>
                          <option value="assamese">Assamese</option>
                          <option value="bhojpuri">Bhojpuri</option>
                          <option value="haryanvi">Haryanvi</option>
                          <option value="rajasthani">Rajasthani</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Image</label>
                        <Form.Control
                          //   defaultValue="michael23"
                          placeholder=""
                          type="file"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Submit
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
