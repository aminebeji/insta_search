import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

function AgeGraph({ data }) {
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setValues(data?.map((d) => d?.percent * 100 || 0)); 
      setLabels(data?.map((d) => `age ${d?.name}` || "Unknown")); 
    }
  }, [data]);

  const barOptions = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", 
          "rgba(54, 162, 235, 0.6)", 
          "rgba(255, 206, 86, 0.6)", 
          "rgba(231, 233, 237, 0.6)",
          "rgba(153, 102, 255, 0.6)", 
          "rgba(255, 159, 64, 0.6)", 
          "rgba(75, 192, 192, 0.6)", 
          "rgba(255, 99, 132, 0.6)", 
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Followers per age (%)",
      },
    },
  };

  return (
    <div className="chart_card" style={{ width: "40%" }}>
      <Bar data={barOptions} options={options} />
    </div>
  );
}

export default AgeGraph;
