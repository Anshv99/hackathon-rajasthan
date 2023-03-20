import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function DynamicChart() {
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Temperature",
        data: [10, 20, 30, 42, 50, 45, 31, 59, 22, 14, 25, 43],
        borderColor: "white",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = {
          ...prevData,
          labels: [...prevData.labels, prevData.labels.length + 1],
          datasets: prevData.datasets.map((dataset) => ({
            ...dataset,
            data: [...dataset.data, getRandomInt(50)],
          })),
        };
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section style={{marginTop:"10%",marginLeft:"10%"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

    <div className="App" style={{ width: "800px", height: "800px" }}>
      <Line data={data} />
    </div>
<div style={{display:"flex",justifyContent:"space-between",padding:"30%", marginTop:"-60%"}}>
    <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/soil">
                  Soil Moisture
                </a>
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/humidity">
                  Humidity
                </a></div>
    </div>
    </section>
  );
}

export default DynamicChart;
