import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Title,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Title
);
import { Chart, Line, Bar, Scatter } from "react-chartjs-2";

const options = {
  scales: {
    xAxis: { display: false },
    yAxis: { display: true },
  },
};

export const LineGraph = (raw_data: { label: string; data: number[] }) => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: raw_data.label,
        data: raw_data.data.slice(-12),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  return (
    <div className="w-[40vw] h-[30vh]">
      <Line data={data} width={100} height={100} options={options} />
    </div>
  );
};
