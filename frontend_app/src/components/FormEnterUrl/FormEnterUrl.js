import React, { Component } from "react";
import { Input } from "reactstrap";
import { Button, Col, Form, FormGroup } from "react-bootstrap";

class FormEnterUrl extends Component {
  render() {
    return (
      <Form onSubmit={this.props.submit}>
        <FormGroup>
          <Col sm={10}>
            <Input
              required
              type="text"
              name="originalUrl"
              id="originalUrl"
              placeholder="Enter URL here"
              onChange={this.props.change}
              value={this.props.originalUrl}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={{ offset: 2, size: 10 }}>
            <Button type="submit" color="primary">
              Shorten!
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default FormEnterUrl;
