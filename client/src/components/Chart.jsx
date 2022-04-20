import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
