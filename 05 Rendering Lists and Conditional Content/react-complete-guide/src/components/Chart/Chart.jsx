import ChartBar from './ChartBart'

import './Chart.css'

const Chart = ({ dataPoints }) => {
  const maxVal = dataPoints.reduce((acc, act) => act.value > acc ? act.value : acc, 0)

  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={maxVal}
          label={dp.label}
        />
      ))}
    </div>
  )
}

export default Chart
