import type { NextPage } from "next";
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, Chart, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const options = {
  responsive: true,
};

const data = {
  labels: ["1", "2", "3"],
  datasets: [{ label: "Data", data: [1, 2, 3] }],
};

const Home: NextPage = () => {
  return (
    <div>
      <Bar
        style={{ maxHeight: "200px" }}
        options={options}
        data={data}
        data-testid="chart"
      />
    </div>
  );
};

export default Home;
