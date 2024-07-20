import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default function MarksChart() {
  const chartRef = useRef(null);
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/marks');
        setMarksData(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(marksData.mark[0].subject)
  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current && marksData.length > 0) {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy existing chart if it exists
      }

      // Extracting subject names and marks from marksData
      const subjects = marksData.map(mark => mark.subject);
      const marks = marksData.map(mark => mark.marks);

      // Creating new chart
      chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: subjects,
          datasets: [
            {
              label: 'Marks',
              data: marks,
              backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for bars
              borderColor: 'rgba(54, 162, 235, 1)', // Blue color for borders
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Marks',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Subjects',
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Cleanup on unmount
      }
    };
  }, [marksData]);

  return <canvas ref={chartRef} />;
}


