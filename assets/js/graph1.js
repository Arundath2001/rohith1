var months = ["",'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
var yValues1 = [10, 50, 100, 50, 10, 50, 45];
var yValues2 = [50, 10, 50, 100, 50, 10, 30];

var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Line 1',
            data: yValues1,
            borderColor: 'rgba(62, 0, 194, 1)', 
            borderWidth: 2,
            pointRadius: 5,
            fill: false,
            tension: 0.4 
        }, {
            label: 'Line 2',
            data: yValues2,
            borderColor: 'rgba(8, 209, 16, 1)',
            borderWidth: 2,
            pointRadius: 5,
            fill: false,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    stepSize: 50,
                    min: 0,
                    max: 100
                }
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});
