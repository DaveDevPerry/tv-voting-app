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
          <div className="buttons_center hide">
            <button className="button" onClick={getPolls}>
              All polls
            </button>
            <button className="button" onClick={getUserPolls}>
              My polls
            </button>
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
