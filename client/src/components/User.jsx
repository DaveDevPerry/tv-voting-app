import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Pie } from 'react-chartjs-2';

// import { vote } from '../store/actions';
// import { color } from '../services/color';

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);
// import Chart from './Chart';
// import BarChart from './BarChart';

const User = ({ user, auth }) => {
  // console.log(data, 'data');
  // console.log(vote, 'vote');

  // const answers =

  // const pollMetrics = {
  //   totalOptions: poll.options && poll.options.length,
  //   totalVotes:
  //     poll.options &&
  //     poll.options.reduce((accumulator, object) => {
  //       return accumulator + object.votes;
  //     }, 0),
  // };

  // const results =
  //   poll.options &&
  //   poll.options
  //     .sort((a, b) => {
  //       return b.votes - a.votes;
  //     })
  //     .map(option => (
  //       <li
  //         // onClick={() => vote(poll._id, { answer: option.option })}
  //         className="poll-choice-result"
  //         key={option._id}>
  //         <p>{option.option}</p>
  //         {/* - {option.votes} - {pollMetrics.totalVotes} -{' '} */}
  //         <p>{((option.votes / pollMetrics.totalVotes) * 100).toFixed(0)}%</p>
  //       </li>
  //     ));

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

  // const data = {
  //   labels: poll.options.map(option => option.option),
  //   datasets: [
  //     {
  //       label: poll.question,
  //       backgroundColor: poll.options.map(option => color()),
  //       borderColor: '#323643',
  //       data: poll.options.map(option => option.votes),
  //     },
  //   ],
  // };

  // console.log(poll, 'poll');
  // console.log(poll.user && poll.user.username, 'poll user id');
  // console.log(poll.user && poll.user, 'poll user id');
  // console.log(auth.user.id, 'poll user id');
  // // console.log(poll.voted, 'poll voted id');
  // console.log(poll.voted, 'poll voted id');
  // console.log(poll.user && poll.voted.contains(auth.user.id), 'has voted');

  // const usersVote = {
  //   userId: poll.user && poll.user._id,
  //   vote: poll.user && poll._id && poll.voted.includes(poll.user._id),
  // };

  // const usersVote = {
  //   userId: poll.user && auth.user.id,
  //   hasUserVoted:
  //     poll.user && auth.user.id && poll.voted.contains(auth.user.id),
  // };
  // poll.user &&
  // poll._id

  return (
    <Fragment>
      <div>USER COMPONENT {user}</div>
    </Fragment>
  );
  // return (
  //   <Fragment>
  //     {auth.isAuthenticated && <div>yes</div>}
  //     <div className="poll-container">
  //       <div className="vote-container">
  //         <div className="poll-card-header">
  //           <h4> {poll.user && poll.user.username}</h4>
  //           <img src="/images/vote-icon.png" alt="vote count" id="vote-icon" />
  //           <h5>{poll.user && poll.voted.length}</h5>
  //         </div>
  //         <p>user id - {poll.user && poll.voted}</p>
  //         <p>my vote - {poll.user && poll.voted}</p>
  //         <p>did vote - {usersVote.vote}</p>
  //         <p>user id - {auth.user.id}</p>
  //         <p>poll users id - {poll.user && poll.user._id}</p>
  //         {poll.user &&
  //           poll.voted.map(vote => {
  //             return <p key={vote}>{vote}</p>;
  //           })}
  //         {/* <p>did vote - {usersVote.hasUserVoted}</p> */}
  //         <p>
  //           did user vote? -{' '}
  //           {poll.user && poll.voted.includes(auth.user.id) ? 'true' : 'no'}
  //         </p>
  //         <h3 className="poll-title">{poll.question}</h3>
  //         <div className="poll-answers">{answers}</div>
  //         {/* <Pie data={data} /> */}
  //       </div>
  //       <div className="results-container">
  //         <h3 className="poll-title">{poll.question}</h3>
  //         {/* <h4>{pollMetrics.totalOptions}</h4>
  //       <h5>{pollMetrics.totalVotes}</h5> */}
  //         <div className="poll-card-results-header">
  //           {/* <h4> {poll.user.username}</h4> */}
  //           <img
  //             src="/images/vote-icon.png"
  //             alt="vote count"
  //             id="results-vote-icon"
  //           />
  //           <h5>{pollMetrics.totalVotes}</h5>
  //         </div>
  //         <ul className="poll-results">{results}</ul>
  //         {/* <Pie data={data} /> */}
  //       </div>

  //       {/* <div className="chart-container">
  //       <Pie data={data} /> */}
  //       {/* <Pie data={data} options={options} /> */}
  //       {/* <Chart data={data} options={options} /> */}
  //       {/* </div> */}
  //     </div>
  //   </Fragment>
  // );
};

export default connect(store => ({
  user: store.currentUser,
  auth: store.auth,
}))(User);
