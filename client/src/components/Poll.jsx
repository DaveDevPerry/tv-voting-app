import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';

import { vote } from '../store/actions';
import { color } from '../services/color';
import Chart from './Chart';

const Poll = ({ poll, vote }) => {
  // useEffect(() =>{
  //   // const userData = poll.user;
  //   // const votedArr = poll.voted;

  //   if(poll.voted.includes(''))
  // },[])
  useEffect(() => {
    hasVoted();
  }, []);

  const hasVoted = () => {
    const votedArr = poll.voted;
    console.log(votedArr, 'votedArr');
    // if (votedArr.includes('6260257b4dba563448d577f2')) {
    //   console.log('yes');
    // }
  };

  console.log(vote, 'vote');
  console.log(poll, 'poll');
  console.log(poll.user, 'poll user id');
  console.log(poll.voted, 'poll voted id');
  const answers =
    poll.options &&
    poll.options.map(option => (
      <button
        onClick={() => vote(poll._id, { answer: option.option })}
        className="button poll-choice"
        key={option._id}>
        {option.option}
      </button>
    ));

  const data = {
    labels: poll.options.map(option => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map(option => color()),
        borderColor: '#323643',
        data: poll.options.map(option => option.votes),
      },
    ],
  };

  return (
    // <Fragment>
    <div>
      <div className="vote-container">
        <h3 className="poll-title">{poll.question}</h3>
        <div className="buttons_center">{answers}</div>
        <Pie data={data} />
      </div>
      {/* {poll.user._id} */}
      {/* <div className="chart-container">
        <Chart data={data} />
      </div> */}
    </div>
    // </Fragment>
  );
};

export default connect(
  store => ({
    poll: store.currentPoll,
  }),
  { vote },
)(Poll);
