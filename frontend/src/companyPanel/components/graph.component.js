import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales',
            data: [100, 150, 200, 250, 300, 350],
            fill: false,
            lineTension: 0.1,
            scale: 'category',
        },
    ],
};

const BarChart = () => {
    return (
        <Bar data={data} />
    );
};

export default BarChart;