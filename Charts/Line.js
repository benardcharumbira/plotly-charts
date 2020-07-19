TESTER = document.getElementById("lineChart");
var trace1 = {
  x: ["Milk", "Eggs", "Bread", "Cheese", "Pasta"],
  y: [1, 4, 9, 3, 7],
  mode: "markers+text",
  type: "scatter",
  name: "Monday",
  text: [1, 4, 9, 3, 7],
  textfont: {
    family: "Times New Roman",
    size: 16,
    color: "grey",
  },
  textposition: "top center",
  marker: { size: 12 },
};

var trace2 = {
  x: ["Milk", "Eggs", "Bread", "Cheese", "Pasta"],
  y: [5, 2, 8, 13, 3],
  mode: "markers",
  type: "scatter",
  name: "Tuesday",
  marker: { size: 12 },
};

var data = [trace1, trace2];

var layout = {
  xaxis: {
    range: [],
  },
  yaxis: {
    range: [0, 15],
  },
  title: "Scatter",
};

Plotly.newPlot(TESTER, data, layout);
