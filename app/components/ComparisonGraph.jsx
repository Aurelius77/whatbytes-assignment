"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"


export function ComparisonGraph({ userPercentile, averagePercentile }) {
  const generateData = () => {
    const data = []
    for (let i = 0; i <= 100; i += 5) {
      let value = Math.exp(-Math.pow(i - averagePercentile, 2) / (2 * Math.pow(20, 2)))
      value = value * 100 

      data.push({
        percentile: i,
        value: value,
        isUserPoint: i === Math.round(userPercentile),
      })
    }
    return data
  }

  const data = generateData()

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      if (label === Math.round(userPercentile)) {
        return (
          <div className="bg-white p-2 border rounded-md shadow-sm">
            <p className="text-sm">Your percentile: {label}</p>
          </div>
        )
      }
      if (payload[0].value > 90) {
        return (
          <div className="bg-white p-2 border rounded-md shadow-sm">
            <p className="text-sm">90</p>
            <p className="text-blue-500 text-sm">numberOfStudent: 4</p>
          </div>
        )
      }
    }
    return null
  }

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="percentile" type="number" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ddd"
            strokeWidth={2}
            dot={(props) => {
              if (props.payload.isUserPoint) {
                return <circle cx={props.cx} cy={props.cy} r={4} fill="#6366f1" />
              }
              return null
            }}
            activeDot={{ r: 6, fill: "#6366f1" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

