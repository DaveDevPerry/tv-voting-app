import React from 'react';
import { connect } from 'react-redux';
// import { Pie } from 'react-chartjs-2';

import { vote } from '../store/actions';
import { color } from '../services/color';

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);
// import Chart from './Chart';
// import BarChart from './BarChart';

const Poll = ({ poll, vote }) => {
  // console.log(data, 'data');
  // console.log(vote, 'vote');
  console.log(poll, 'poll');
  console.log(poll.user, 'poll user id');
  // console.log(poll.voted, 'poll voted id');
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

  const pollMetrics = {
    totalOptions: poll.options && poll.options.length,
    totalVotes:
      poll.options &&
      poll.options.reduce((accumulator, object) => {
        return accumulator + object.votes;
      }, 0),
  };

  const results =
    poll.options &&
    poll.options
      .sort((a, b) => {
        return b.votes - a.votes;
      })
      .map(option => (
        <li
          // onClick={() => vote(poll._id, { answer: option.option })}
          className="poll-choice-result"
          key={option._id}>
          <p>{option.option}</p>
          {/* - {option.votes} - {pollMetrics.totalVotes} -{' '} */}
          <p>{((option.votes / pollMetrics.totalVotes) * 100).toFixed(2)}%</p>
        </li>
      ));

  // const pollDetails =
  // poll && poll
  // const votePercentage =
  //   poll.options &&
  //   poll.options
  //     .sort((a, b) => {
  //       return b.votes - a.votes;
  //     })
  //     .map(option => (
  //       <li
  //         // onClick={() => vote(poll._id, { answer: option.option })}
  //         className="button poll-choice"
  //         key={option._id}>
  //         {option.option} - {option.votes} - {option.votes}
  //       </li>
  //     ));
  // poll.options.map(option => (
  //   <li
  //     onClick={() => vote(poll._id, { answer: option.option })}
  //     className="button poll-choice"
  //     key={option._id}>
  //     {option.option} - {option.votes}
  //   </li>
  // ));

  // const options = {
  //   // plugins: {
  //   // 	title: {
  //   // 		display: true,
  //   // 		text: 'Chart.js Bar Chart - Stacked',
  //   // 	},
  //   // },
  //   responsive: true,
  //   // scales: {
  //   //   x: {
  //   //     stacked: true,
  //   //   },
  //   //   y: {
  //   //     stacked: true,
  //   //   },
  //   // },
  // };

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
    <div className="poll-container">
      <div className="vote-container">
        {/* <div className="poll-card-header">
          <h4> {poll}</h4>
          <img src="/images/vote-icon.png" alt="vote count" id="vote-icon" />
          <h5>{poll.voted.length}</h5>
        </div> */}
        <h3 className="poll-title">{poll.question}</h3>
        <div className="poll-answers">{answers}</div>
        {/* <Pie data={data} /> */}
      </div>
      <div className="results-container">
        <h3 className="poll-title">{poll.question}</h3>
        {/* <h4>{pollMetrics.totalOptions}</h4>
        <h5>{pollMetrics.totalVotes}</h5> */}
        <div className="poll-card-results-header">
          {/* <h4> {poll.user.username}</h4> */}
          <img
            src="/images/vote-icon.png"
            alt="vote count"
            id="results-vote-icon"
          />
          <h5>{pollMetrics.totalVotes}</h5>
        </div>
        <ul className="poll-results">{results}</ul>
        {/* <Pie data={data} /> */}
      </div>

      {/* <div className="chart-container">
        <Pie data={data} /> */}
      {/* <Pie data={data} options={options} /> */}
      {/* <Chart data={data} options={options} /> */}
      {/* </div> */}
    </div>
  );
};

export default connect(
  store => ({
    poll: store.currentPoll,
  }),
  { vote },
)(Poll);
