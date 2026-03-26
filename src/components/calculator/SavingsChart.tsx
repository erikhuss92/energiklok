'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import { formatSEK } from '@/lib/utils'

interface Props {
  data: number[]
}

export function SavingsChart({ data }: Props) {
  const chartData = data.map((value, index) => ({
    year: index + 1,
    savings: value,
  }))

  return (
    <div className="h-72 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
          <defs>
            <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B4332" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#1B4332" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12, fill: '#44403C' }}
            label={{ value: 'År', position: 'insideBottomRight', offset: -5, fontSize: 12 }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#44403C' }}
            tickFormatter={(v) => `${Math.round(v / 1000)}k`}
          />
          <Tooltip
            formatter={(value) => [formatSEK(value as number), 'Kumulativ besparing']}
            labelFormatter={(label) => `År ${label}`}
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '14px',
            }}
          />
          <ReferenceLine y={0} stroke="#DC2626" strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="savings"
            stroke="#1B4332"
            strokeWidth={2}
            fill="url(#savingsGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
