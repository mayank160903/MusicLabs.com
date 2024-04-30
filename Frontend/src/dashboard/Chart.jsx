import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['December', 'January', 'february'] }]}
      series={[{ data: [4, 3, 6] }]}
      width={500}
      height={300}
      barColors={['#FF6384']} // Set the bar color to a shade of red
      backgroundColor="#000000" // Set the background color to black
    />
  );
}