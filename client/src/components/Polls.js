import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPolls, getUserPolls } from '../store/actions';

class Polls extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
  }

  render() {
    const { auth, getPolls, getUserPolls } = this.props;
    const polls = this.props.polls.map((poll) => (
      <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
        {poll.user.username && <span>by {poll.user.username}</span>}
      </li>
    ));

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div className="button_center">
            <button className="button" onClick={getPolls}>
              모든 투표 보기
            </button>
            <button className="button" onClick={getUserPolls}>
              나의 투표 보기
            </button>
          </div>
        )}
        <ul className="polls">{polls}</ul>
      </Fragment>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    polls: store.polls,
  }),
  { getPolls, getUserPolls }
)(Polls);
