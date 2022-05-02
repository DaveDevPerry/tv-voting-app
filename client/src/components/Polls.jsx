import React, { Component, Fragment } from 'react';
import { RiTrophyFill } from 'react-icons/ri';
import { FaVoteYea } from 'react-icons/fa';
import { MdHowToVote } from 'react-icons/md';
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
        className="poll-card poll-card-new"
        // className={
        //   poll.voted.includes(auth.user.id)
        //     ? 'poll-card poll-card-new has-voted'
        //     : 'poll-card poll-card-new'
        // }
        onClick={() => this.handleSelect(poll._id)}
        key={poll._id}>
        {/* {poll.user._id} */}
        <div className="poll-card-header">
          <h4>{poll.user.username}</h4>
          {/* {poll.voted.includes(auth.user.id) ? ( */}
          {poll.options && poll.voted.includes(auth.user.id) ? (
            // <img
            //   src="/images/has-voted-icon.png"
            //   alt="has voted"
            //   id="has-voted-icon"
            // />
            <FaVoteYea alt="has voted" className="has-voted-icon" />
          ) : (
            // <FaVoteYea alt="has voted" className="has-voted-icon" />
            ''
          )}
          {/* <img src="/images/vote-icon.png" alt="vote count" id="vote-icon" /> */}
          <MdHowToVote alt="vote count" className="vote-icon" />
          <h5>{poll.voted.length}</h5>
        </div>
        <div className="poll-card-question">{poll.question}</div>
        {/* <div className="poll-card-current-winner"> */}
        {poll.options &&
          poll.options
            .sort((a, b) => {
              return b.votes - a.votes;
            })
            .slice(0, 1)
            .map(option => (
              <div
                // onClick={() => vote(poll._id, { answer: option.option })}
                className="poll-card-current-winner"
                key={option._id}>
                <RiTrophyFill className="trophy-icon" />
                <p>{option.option}</p>
                {/* - {option.votes} - {pollMetrics.totalVotes} -{' '} */}
                {/* <p>{((option.votes / pollMetrics.totalVotes) * 100).toFixed(0)}%</p> */}
                <p>{option.votes}</p>
              </div>
            ))}
        {/* </div> */}
      </div>
    ));
    // const polls = this.props.polls.map(poll => (
    //   <div
    //     className="poll-card poll-card-new"
    //     onClick={() => this.handleSelect(poll._id)}
    //     key={poll._id}>
    //     {/* {poll.user._id} */}
    //     <div className="poll-card-header">
    //       <h4> {poll.user.username}</h4>
    //       <img src="/images/vote-icon.png" alt="vote count" id="vote-icon" />
    //       <h5>{poll.voted.length}</h5>
    //     </div>
    //     <div className="poll-card-question">{poll.question}</div>
    //   </div>
    // ));

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

    // const currentUser = auth.user.username;

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div className="poll-btns-container">
            {/* <button>{currentUser}</button> */}
            <button className="btn" onClick={getUserPolls}>
              My polls
            </button>
            <button className="btn" onClick={getPolls}>
              All polls
              {/* {polls.length} */}
            </button>
            <Link className="navbar-item btn" to="/poll/new">
              Add Poll
            </Link>
          </div>
        )}
        {/* <ul className="polls">{polls}</ul> */}
        <div className="polls-grid-container">
          <div className="polls-grid">{polls}</div>
        </div>
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
