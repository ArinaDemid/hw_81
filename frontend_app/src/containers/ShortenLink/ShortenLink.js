import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { onSubmitLink } from "../../store/actions/linksActions";
import FormEnterUrl from "../../components/FormEnterUrl/FormEnterUrl";
import { Alert } from "reactstrap";

class ShortenLink extends Component {
  state = {
    originalUrl: ""
  };

  submitFormHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ originalUrl: "" });
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let showDivWithAttention = "none";
    if (this.props.shortUrl) {
      showDivWithAttention = "block";
    }
    const linkShort = `http://localhost:8000/${this.props.shortUrl}`;
    return (
      <Fragment>
        <h2 style={{ margin: "40px" }}>Shorten your link!!!</h2>
        <FormEnterUrl
          change={this.inputChangeHandler}
          submit={event => this.submitFormHandler(event)}
          originalUrl={this.state.originalUrl}
        />
        <Alert
          color="success"
          style={{ display: showDivWithAttention, maxWidth: "895px" }}
        >
          <h5>Your link now looks like this:</h5>
          <p>
            <a href={linkShort} target="_blank" rel="noopener noreferrer">
              {linkShort}
            </a>
          </p>
        </Alert>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    shortUrl: state.links.shortUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: originalUrl => dispatch(onSubmitLink(originalUrl))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenLink);
