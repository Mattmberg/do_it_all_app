import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "First",
            data: [1, 2, 3, 4, 5, 6],
            fill: true,
            backgroundColor: "rgba(0, 217, 84, 0.2)",
            borderColor: "rgba(0, 217, 84, 1)"
        },
        {
            label: "Second",
            data: [1, 2, 3, 4, 5, 6],
            fill: false,
            borderColor: "#FF0000"
        }
    ]
};

const Chart = () => {

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default Chart;