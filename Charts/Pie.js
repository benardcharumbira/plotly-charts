TESTER = document.getElementById("pieChart");

var trace1 = {
  values: [8.1, 3.8, 2.7, 2.3, 1.4],
  labels: ["Cape Town", "Durban", "Limpopo", "Pretoria", "Mafikeng"],
  type: "pie",
  name: "Covid Rates",
  hoverinfo: "label",
  hole: 0.4,
  domain: {
    row: 0,
    column: 0,
  },
};

var trace2 = {
  values: [4.1, 3.8, 5.7, 1.3, 9.4],
  labels: ["Cape Town", "Durban", "Limpopo", "Pretoria", "Mafikeng"],
  type: "pie",
  name: "Population",
  hoverinfo: "label",
  domain: {
    row: 0,
    column: 1,
  },
};

var data = [trace1, trace2];

var layout = {
  grid: { rows: 2, columns: 2 },
  height: 600,
  width: 650,
  title: "Pie Chart",
  showlegend: true,
  annotations: [
    {
      font: {
        size: 12,
      },
      showarrow: false,
      text: "STATS",
      x: 0.19,
      y: 0.8,
    },
  ],
};

Plotly.newPlot("pieChart", data, layout);
