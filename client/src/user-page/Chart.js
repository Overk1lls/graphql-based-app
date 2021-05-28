import React from 'react';
import { Line } from 'react-chartjs-2';

export default class chartJS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: this.props.user.chart.map(item => item.year),
                datasets: [
                    {
                        label: 'Кількість відправлених рішень',
                        data: this.props.user.chart.map(item => item.solves),
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.75)',
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                precision: 0,
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        }
    }

    render() {
        return (
            <div className="container chart">
                <h3 className="text-center mt-5 pt-5">Графік рішень</h3>
                <Line className="my-5" data={this.state.data} options={this.state.options} />
            </div>
        );
    }
};