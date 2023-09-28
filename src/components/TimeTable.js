{/*import React from "react";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import {Chart, LinearScale, PointElement, Tooltip, Legend, TimeScale, registerables} from "chart.js"; 
import './TimeTable.css';
Chart.register(...registerables);


const TimeTable = ({ countryData }) => {

  let uniqueYearsAndMonths = []; // Declare it at a higher scope
  let yearsAndMonths=[];
  let chartData=[];

  if (!countryData || !countryData.features) {
    return null; // Render nothing while data is being fetched
  } else {
    uniqueYearsAndMonths = Object.keys(countryData.features[0].properties)
      .filter(key => key.startsWith("POP-"))
      .map(key => key.slice(4)); // Remove "POP-" prefix
    yearsAndMonths = [...new Set(uniqueYearsAndMonths)];
    chartData = yearsAndMonths.map(yearMonth => ({
        yearMonth,
        data: [],
      }));

      countryData.features.forEach(feature => {
        const properties = feature.properties;
        yearsAndMonths.forEach(yearMonth => {
          const population = properties[`POP-${yearMonth}`] || null; 
          const insec_pop= properties[`PH3:5-${yearMonth}`] || null;
          const insec_pop_perc= calculatePercentage(insec_pop,population)
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
  const chartDatasets = chartData.map((dataItem, index) => ({
    label: dataItem.yearMonth,
    data: dataItem.data.map(item => item.population),
    fill: false,
    borderColor: lineColors[index % lineColors.length], // Cycle through colors
  }));


  const chartDatas = {
    labels: chartLabels, // X-axis labels (years and months)
    datasets: chartDatasets, // Data for the lines (population data)
    
  };

  console.log(chartDatasets);

  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month", // Customize the time unit as needed
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
        position: "top", // Customize legend position as needed
      },
    },
  };

  
  

  return (
    <div className="timetable-container">
    {/* Render the Line chart 
    <Line data={chartDatas} options={chartOptions} />
  </div>
  );
};


function calculatePercentage(value, total) {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Displaying percentage with two decimal places
  }

export default TimeTable;*/}
