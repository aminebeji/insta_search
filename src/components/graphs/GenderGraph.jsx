import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

function GenderGraph({ data }) {
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setValues(data?.map((d) => d?.percent * 100 || 0)); 
      setLabels(
        data?.map((d) => (d?.name == "f" ? "Female" : "Male" || "Unknown"))
      ); 
    }
  }, [data]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Followers per gender (%)",
        data: values,
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", 
          "rgba(54, 162, 235, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Followers per gender (%)",
      },
    },
  };
  return (
    <div className="chart_card"  style={{ width: "20%" }}>
      <Pie height={"50px"}  data={chartData} options={options} />
    </div>
  );
}

export default GenderGraph;
