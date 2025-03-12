"use client"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"



export function QuestionAnalysisChart({ correct, total }) {
  
  const correctPercentage = (correct / total) * 100
  const incorrectPercentage = 100 - correctPercentage

  
  const data = [
    { name: "Correct", value: correctPercentage },
    { name: "Incorrect", value: incorrectPercentage },
  ]

 
  const COLORS = ["#3b82f6", "#e5e7eb"]

  
  const targetData = [{ value: 100 }]

  return (
    <div className="relative h-40 w-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          <Pie
            data={[{ value: 100 }]}
            cx="50%"
            cy="50%"
            outerRadius={60}
            innerRadius={55}
            fill="#f3f4f6"
            stroke="none"
            dataKey="value"
          />

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={55}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

  
          <Pie
            data={targetData}
            cx="50%"
            cy="50%"
            innerRadius={58}
            outerRadius={62}
            startAngle={90 - correctPercentage * 3.6}
            endAngle={88 - correctPercentage * 3.6}
            dataKey="value"
            stroke="none"
            fill="#ef4444"
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold">
          🎯
        </span>
      </div>
    </div>
  )
}

