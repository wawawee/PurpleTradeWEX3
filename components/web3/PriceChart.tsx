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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Generate mock data
const generateData = (days: number) => {
  const data = [];
  let price = 1.2;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    price = price * (1 + (Math.random() - 0.5) * 0.1);
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
          <Tabs defaultValue="7D" className="w-[300px]">
            <TabsList className="grid w-full grid-cols-3">
              {Object.keys(timeframes).map((tf) => (
                <TabsTrigger
                  key={tf}
                  value={tf}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </TabsTrigger>
              ))}
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