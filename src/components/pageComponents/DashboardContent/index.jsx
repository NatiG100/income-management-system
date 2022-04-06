import React from 'react';
import {
    StyledDashboardContent,
    StyledGraphContainer,
    StyledGraphWithTitle
} from './style';
import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

const DashboardContent = () => {
    return (
        <StyledDashboardContent>
            <StyledGraphWithTitle>

                <h2>Transactions</h2>
                <StyledGraphContainer>
                    <Bar
                        data={{
                            labels: ['Meethod 1', 'Method 2', 'Method3', 'Method 4'],
                            datasets: [{
                                label: "Transactions",
                                data: [40, 50, 25, 30],
                                borderWidth: 0,
                                backgroundColor: "#BF40BF44",
                            }],
                        }}
                        height={100}
                        width={100}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </StyledGraphContainer>
            </StyledGraphWithTitle>
            <StyledGraphWithTitle>

                <h2>Income</h2>
                <StyledGraphContainer>
                    <Pie
                        data={{
                            labels: ['Meethod 1', 'Method 2', 'Method3', 'Method 4'],
                            datasets: [{
                                label: "total",
                                data: [40 * 100, 50 * 100, 25 * 100, 30 * 100],
                                backgroundColor: ['#BF40BF', '#0096FF ', '#0EC29B', '#FFA500'],
                                borderWidth: 0,
                            }],
                        }}
                        height={100}
                        width={100}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </StyledGraphContainer>
            </StyledGraphWithTitle>
            <StyledGraphWithTitle>

                <h2>Sells</h2>
                <StyledGraphContainer>
                    <Line
                        data={{
                            datasets: [{
                                label: "Sells",
                                data: [{ y: 20, x: "2011" }, { y: 15, x: "2012" }, { y: 30, x: "2013" }, { y: 55, x: "2014" },
                                { y: 40, x: "2015" }, { y: 60, x: "2016" }, { y: 70, x: "2017" }, { y: 72, x: "2018" }],
                                borderWidth: 2,
                                backgroundColor: "#BF40BF44",
                                fill: true,
                                tension: 0.3
                            },]
                        }}
                        height={100}
                        width={100}
                        options={{
                            maintainAspectRatio: false,

                            backgroundColor: "red"
                        }}
                    />
                </StyledGraphContainer>
            </StyledGraphWithTitle>
            <StyledGraphWithTitle>

                <h2>Transactions</h2>
                <StyledGraphContainer>
                    <Doughnut
                        data={{
                            labels: ['Meethod 1', 'Method 2', 'Method3', 'Method 4'],
                            datasets: [{
                                data: [40, 50, 25, 30],
                                backgroundColor: ['#BF40BF', '#0096FF ', '#0EC29B', '#FFA500'],
                                borderWidth: 0,
                            }],
                        }}
                        height={100}
                        width={100}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            plugins: {
                                labels: {

                                }
                            }
                        }}
                    />
                </StyledGraphContainer>
            </StyledGraphWithTitle>
        </StyledDashboardContent>
    );
}
export default DashboardContent;