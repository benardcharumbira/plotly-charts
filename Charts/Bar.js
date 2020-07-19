TESTER = document.getElementById("barChart");
var trace1 = {
  x: ["Soccer", "Tennis", "Rugby", "Golf", "Track"],
  y: [25, 15, 45, 30, 70],
  type: "bar",
  name: "USA",
  text: [
    "0 above mean",
    "20 above mean",
    "10 below mean",
    "5 below mean",
    "15 above mean",
  ],
};

var trace2 = {
  x: ["Soccer", "Tennis", "Rugby", "Golf", "Track"],
  y: [30, 10, 60, 40, 90],
  type: "bar",
  name: "RSA",
};

var data = [trace1, trace2];

var layout = {
  barmode: "group",
  bargap: 0.3,
  xaxis: {
    range: [],
  },
  yaxis: {
    range: [0, 100],
  },
  showlegend: false,
  title: "Bar Chart",
};

Plotly.newPlot(TESTER, data, layout);
