//fill pie chart


const fillPieChart = document.getElementById('fillPieChart').getContext('2d');

const myChart = new Chart(fillPieChart, {
    type: 'pie',

    data: {
        labels: ['Complite', 'In Prograse', 'Upcoming'],
        datasets: [{
            label: '# of Votes',
            data: [20, 40, 40,],
            backgroundColor: [
                '#099F0B',
                '#FE8F1C',
                '#B0DDF9',
            ],
            borderColor: [
                '#fff',
                '#fff',
                '#fff',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: "right",
            // align: "middle",
        },
    }

});





    //doughnut chart1
    const doughnutPieChart1 = document.getElementById('doughnutPieChart1').getContext('2d');
    const myChart2 = new Chart(doughnutPieChart1, {
        type: 'doughnut',
        data: {
            labels: ['Complite', 'In Prograse', 'Upcoming'],
            datasets: [{
                label: '# of Votes',
                data: [20, 40, 40,],
                backgroundColor: [
                    '#099F0B',
                    '#FE8F1C',
                    '#B0DDF9',
                ],
                borderColor: [
                    '#fff',
                    '#fff',
                    '#fff',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: "right",
                align: "middle",
            },
        }
    });

    // doughnut chart2
    const doughnutPieChart2 = document.getElementById('doughnutPieChart2').getContext('2d');
    const myChart3 = new Chart(doughnutPieChart2, {
        type: 'doughnut',
        data: {
            labels: ['Complite', 'In Prograse', 'Upcoming', 'Declined'],
            datasets: [{
                label: '# of Votes',
                data: [45, 40, 10, 5],
                backgroundColor: [
                    '#099F0B',
                    '#FE8F1C',
                    '#B0DDF9',
                    '#FE4A1C'
                ],
                borderColor: [
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: "right",
                align: "middle",
            },
        }
    });

    // doughnut chart3
    const doughnutPieChart3 = document.getElementById('doughnutPieChart3').getContext('2d');
    const myChart4 = new Chart(doughnutPieChart3, {
        type: 'doughnut',
        data: {
            labels: ['Income', 'Expense',],
            datasets: [{
                label: '# of Votes',
                data: [65, 35,],
                backgroundColor: [
                    '#7B2182',
                    '#B0DDF9',

                ],
                borderColor: [
                    '#fff',
                    '#fff',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: "right",
                // align: "middle",
            },

        }
    });



