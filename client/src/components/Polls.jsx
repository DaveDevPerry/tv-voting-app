import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    const { getPolls, getUserPolls, auth } = this.props;

    // WORKING LI VERSION
    // const polls = this.props.polls.map(poll => (
    //   <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
    //     {poll.question}
    //   </li>
    // ));
    const polls = this.props.polls.map(poll => (
      <div
        className="poll-card"
        onClick={() => this.handleSelect(poll._id)}
        key={poll._id}>
        {poll.question}
      </div>
    ));

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div className="poll-btns-container">
            <button className="btn" onClick={getUserPolls}>
              My polls
            </button>
            <button className="btn" onClick={getPolls}>
              All polls
            </button>
            <Link className="navbar-item btn" to="/poll/new">
              New Poll
            </Link>
          </div>
        )}
        {/* <ul className="polls">{polls}</ul> */}
        <div className="polls-grid">{polls}</div>
      </Fragment>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls,
  }),
  { getPolls, getUserPolls },
)(Polls);
