import React, { Component } from "react";
import { Form, Button, Col, Table } from "react-bootstrap";
import axios from "axios";

export default class PatientPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientID: "",
      relatedForms: [],
    };

    this.retrievePatient = this.retrievePatient.bind(this);
    this.enterPatientID = this.enterPatientID.bind(this);
  }

  download = (filename, text) => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  retrievePatient = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:3001/api/v1/patient/form_query/${this.state.patientID}`
      )
      .then((res) => {
        const form_info = res.data;
        this.setState({
          relatedForms: form_info,
        });
      });
  };

  enterPatientID = (event) => {
    this.setState({
      patientID: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>Enter Patient ID:</h1>
          <Form onSubmit={this.retrievePatient}>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Patient ID:</Form.Label>
                  <Form.Control
                    value={this.state.name}
                    onChange={this.enterPatientID}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginTop: "32px", marginLeft: "6px" }}
                >
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>

          <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ maxWidth: "300px" }}
          >
            <thead>
              <tr>
                <th>form #</th>
                <th>link</th>
              </tr>
            </thead>
            <tbody>
              {this.state.relatedForms.map((form) => (
                <tr key={form.diagnosticID}>
                  <td>{form.diagnosticID}</td>
                  <td>
                    <Button>Link</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
