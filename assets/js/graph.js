document.addEventListener("DOMContentLoaded", function() {
    const xValues = ["M", "T", "W", "Th", "F", "S"];
    const yValues = [100, 300, 150, 220, 250, 50];
  
    const ctx2 = document.getElementById("myChart").getContext("2d");
    const gradient = ctx2.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#3E00C2");
    gradient.addColorStop(1, "#1C00C508");
  
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: gradient,
          data: yValues
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 300,
              stepSize: 100,
            }
          }],
          xAxes: [{
            barPercentage: 0.4,
            categoryPercentage: 0.7, 
            gridLines: {
              display: false,
            },
          }],
        },
        elements: {
          rectangle: {
            borderRadius: 50, 
          }
        },
        layout: {
          padding: {
            top: 20,
          }
        }
      }
    });
  });
  