import React, { useEffect, useRef } from 'react';
import { Chart, ChartOptions } from 'chart.js';

interface ChartProps {
  type: 'line' | 'bar';
  data: any;
  options?: ChartOptions;
}

const ChartComponent: React.FC<ChartProps> = ({ type, data, options }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy the previous chart instance
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type,
        data,
        options,
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Clean up chart when component unmounts
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
