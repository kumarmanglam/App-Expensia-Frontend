import React from "react";
import Chart from "react-apexcharts";

function Donut({ income, expense, subscription, investment }) {
  return (
    <div>
      <div className="border-2 border-gray-800 donutChart mx-5 rounded-lg">
        <Chart
          type="donut"
          options={{
            labels: ["Income", "Expense", "Subscription", "Investment"],
            dataLabels: {
              enabled: true,
              enabledOnSeries: [0, 1, 2, 3], // Set the data labels for specific series (0, 1, 2, 3)
            },
          }}
          series={[income, expense, subscription, investment]}
          labels={["Income", "Expense", "Subscription", "Investment"]}
          width="450"
        />
      </div>
    </div>
  );
}

export default Donut;
