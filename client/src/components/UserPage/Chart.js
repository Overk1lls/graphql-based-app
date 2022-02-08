import { Line } from 'react-chartjs-2';

const data = {
    datasets: [
        {
            label: 'Кількість відправлених рішень',
            data: [0, 2, 1, 4],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.75)',
        }
    ],
    labels: ['15.05.21', '16.05.21', '17.05.21', '18.05.21']
};

const options = {
    scales: {
        yAxes: {
            ticks: {
                beginAtZero: true,
                precision: 0,
            }
        }
    }
};

const chart = () => (
    <div className="container chart">
        <h3 className="text-center my-5 pt-5">Графік рішень</h3>
        <Line className="my-5" data={data} options={options} />
    </div>
);

export default chart;