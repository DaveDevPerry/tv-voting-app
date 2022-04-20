import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ data }) => {
  const options = {
    // plugins: {
    // 	title: {
    // 		display: true,
    // 		text: 'Chart.js Bar Chart - Stacked',
    // 	},
    // },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  // const data = {
  //   labels: ['Level Four', 'Level Five', 'Level Six'],
  //   datasets: [
  //     {
  //       label: 'Correct Words',
  //       data: [
  //         levelFourWordData.filter(words => {
  //           return words.isCorrect === true;
  //         }).length,
  //         levelFiveWordData.filter(words => {
  //           return words.isCorrect === true;
  //         }).length,
  //         levelSixWordData.filter(words => {
  //           return words.isCorrect === true;
  //         }).length,
  //       ],
  //       backgroundColor: 'rgb(99, 255, 109)',
  //     },
  //     {
  //       label: 'Incorrect Words',
  //       data: [
  //         `-${
  //           levelFourWordData.filter(words => {
  //             return words.isCorrect === false;
  //           }).length
  //         }`,
  //         `-${
  //           levelFiveWordData.filter(words => {
  //             return words.isCorrect === false;
  //           }).length
  //         }`,
  //         `-${
  //           levelSixWordData.filter(words => {
  //             return words.isCorrect === false;
  //           }).length
  //         }`,
  //       ],
  //       backgroundColor: 'rgb(255, 99, 132)',
  //     },
  //   ],
  // };
  return <Bar data={data} options={options} />;
};

export default BarChart;
