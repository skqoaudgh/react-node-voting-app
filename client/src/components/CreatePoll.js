import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createPoll } from '../store/actions';

class CreatePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      options: [''],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ''] });
  }

  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoll(this.state);
  }

  render() {
    const options = this.state.options.map((option, index) => (
      <Fragment key={index}>
        <label className="form-label">{index + 1}번 항목</label>
        <input
          className="form-input"
          type="text"
          value={option}
          onChange={(e) => this.handleAnswer(e, index)}
        />
      </Fragment>
    ));
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor="question">
          질문
        </label>
        <input
          className="form-input"
          type="text"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
        />
        {options}
        <div className="button_center">
          <button className="button" type="button" onClick={this.addAnswer}>
            항목 추가
          </button>
          <button className="button" type="submit">
            제출
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { createPoll })(CreatePoll);
