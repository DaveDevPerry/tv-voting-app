import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { getUsers } from '../store/actions';

class Users extends Component {
  constructor(props) {
    super(props);
    // this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  // handleSelect(id) {
  //   const { history } = this.props;
  //   history.push(`/poll/${id}`);
  // }

  render() {
    const { getUsers, auth } = this.props;

    // REMOVE DUPLICATES BEFORE MAPPING
    const users = this.props.users.map(user => (
      <div key={user._id}>
        <h4>{user.user.username}</h4>
        {user.user.username}
      </div>
    ));
    // const polls = this.props.polls.map(poll => (
    //   <div
    //     className="poll-card poll-card-new"
    //     onClick={() => this.handleSelect(poll._id)}
    //     key={poll._id}>
    //     {/* {poll.user._id} */}
    //     {poll.voted.length}
    //     {poll.question}
    //   </div>
    // ));

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div className="poll-btns-container">
            {/* <button className="btn" onClick={getUserPolls}>
              My polls
            </button> */}
            <button className="btn" onClick={getUsers}>
              All Users
            </button>
            {/* <Link className="navbar-item btn" to="/poll/new">
              New Poll
            </Link> */}
          </div>
        )}
        {/* <ul className="polls">{polls}</ul> */}
        <div className="polls-grid">{users}</div>
        <div className="polls-grid">users here</div>
      </Fragment>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    users: store.users,
  }),
  { getUsers },
)(Users);
