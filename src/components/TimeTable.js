import React from "react";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import { Chart, LinearScale, PointElement, Tooltip, Legend, TimeScale, registerables } from "chart.js";
import './TimeTable.css';
Chart.register(...registerables);

const TimeTable = ({ countryData }) => {
  let uniqueYearsAndMonths = [];
  let yearsAndMonths = [];
  let chartData = [];

  if (!countryData || !countryData.features || !countryData.features[0] || !countryData.features[0].properties){
    return null;
  } else {
    uniqueYearsAndMonths = Object.keys(countryData.features[0].properties)
      .filter(key => key.startsWith("POP-"))
      .map(key => key.slice(4));
    yearsAndMonths = [...new Set(uniqueYearsAndMonths)];
    chartData = yearsAndMonths.map(yearMonth => ({
      yearMonth,
      data: [],
    }));

    countryData.features.forEach(feature => {
      const properties = feature.properties;
      yearsAndMonths.forEach(yearMonth => {
        const population = properties[`POP-${yearMonth}`] || null;
        const insec_pop = properties[`PH3:5-${yearMonth}`] || null;
        const insec_pop_perc = calculatePercentage(insec_pop, population);
        chartData.find(dataItem => dataItem.yearMonth === yearMonth).data.push({
          country: properties.Country,
          population: insec_pop_perc,
        });
      });
    });
  }

  const lineColors = [
    'red',
    'blue',
    'green',
    'orange',
    'purple',
    'pink',
    'teal',
    'cyan',
    'lime',
    'brown',
    'grey',
    'magenta',
    'olive',
    'indigo',
    'maroon',
    'violet'
  ];

  const chartLabels = yearsAndMonths;

  const chartDatasets = [];

  const countries = Array.from(new Set(chartData[0].data.map(item => item.country)));

  countries.forEach((country, index) => {
    const dataForCountry = chartData.map(dataItem => {
      const countryDataItem = dataItem.data.find(item => item.country === country);
      return countryDataItem ? parseFloat(countryDataItem.population) : null;
    });

    chartDatasets.push({
      label: country,
      data: dataForCountry,
      fill: false,
      borderColor: lineColors[index % lineColors.length],
    });
  });

  const chartDataFinal = {
    labels: chartLabels,
    datasets: chartDatasets,
  };

  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          stepSize: 4,
        },
        title: {
          display: true,
          text: "Time Period",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage of insecure population",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    
    <div className="timetable-container">
        <div className="chart-title">Percentage of food insecure people over time. Phases 3 to 5.</div>
      <Line data={chartDataFinal} options={chartOptions} />
    </div>
  );
};

function calculatePercentage(value, total) {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Displaying percentage with two decimal places
  }

export default TimeTable;
