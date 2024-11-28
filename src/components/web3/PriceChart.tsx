import { useState } from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Generate mock data with strong upward trend
const generateData = (days: number) => {
  const data = [];
  let price = 1.15; // Start lower for more dramatic rise
  const baseIncrease = 0.02; // Strong base increase
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Add mostly positive random variation
    const randomFactor = (Math.random() * 0.015) - 0.003; // Mostly positive
    price = price * (1 + baseIncrease + randomFactor);
    
    data.push({
      date: date.toLocaleDateString(),
      price: parseFloat(price.toFixed(4))
    });
  }
  return data;
};

const timeframes = {
  '7D': generateData(7),
  '30D': generateData(30),
  '90D': generateData(90)
};

export function PriceChart() {
  const [timeframe, setTimeframe] = useState('7D');

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>FTSEB/USDC Price</CardTitle>
          <Tabs defaultValue="7D" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="7D"
                onClick={() => setTimeframe('7D')}
              >
                7D
              </TabsTrigger>
              <TabsTrigger
                value="30D"
                onClick={() => setTimeframe('30D')}
              >
                30D
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timeframes[timeframe as keyof typeof timeframes]}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={['auto', 'auto']}
                tickFormatter={(value) => `$${value.toFixed(4)}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Price
                            </span>
                            <span className="font-bold text-primary">
                              ${payload[0].value.toFixed(4)}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Date
                            </span>
                            <span className="font-bold">
                              {payload[0].payload.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}