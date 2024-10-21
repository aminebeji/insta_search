import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function GenderAgeGraph({ data }) {
  const [valuesMales, setValuesMale] = useState([]);
  const [valuesFemales, setValuesFemales] = useState([]);

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setValuesMale(data?.map((d) => d?.m * 100 || 0));
      setValuesFemales(data?.map((d) => d?.f * 100 || 0));

      setLabels(data?.map((d) => d?.category || "Unknown"));
    }
  }, [data]);

  const LineData = {
    labels: labels,
    datasets: [
      {
        label: "Age per males (%)",
        data: valuesMales,
        borderColor: "#E66FD2",
        fill: false,
        tension: 0.4,
        borderJoinStyle: "round",
        borderCapStyle: "round",
        pointRadius: 4,
        pointStyle: "circle",
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Age per females (%)",
        data: valuesFemales,
        borderColor: "#8C6FE6",
        fill: false,
        tension: 0.4,
        borderJoinStyle: "round",
        borderCapStyle: "round",
        pointRadius: 4,
        pointStyle: "circle",
        pointBackgroundColor: "#8C6FE6",
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
    <div className="chart_card_line chart_card" style={{ width: "50%" }}>
      <Line  width={350} data={LineData} options={options} />
    </div>
  );
}

export default GenderAgeGraph;
