"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownUp } from 'lucide-react';

export function TokenSwap() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleSwap = async () => {
    // Implement swap logic here
    console.log('Swap initiated:', { fromAmount, toAmount });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Swap Tokens</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border bg-card p-4">
          <Input
            type="number"
            placeholder="0.0"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="text-lg border-0 bg-transparent focus-visible:ring-0"
          />
          <p className="text-sm text-muted-foreground mt-2">WEX Token</p>
        </div>
        
        <div className="flex justify-center -my-2 relative z-10">
          <Button variant="outline" size="icon" className="rounded-full bg-background">
            <ArrowDownUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <Input
            type="number"
            placeholder="0.0"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            className="text-lg border-0 bg-transparent focus-visible:ring-0"
          />
          <p className="text-sm text-muted-foreground mt-2">Stock Token</p>
        </div>

        <Button 
          className="w-full" 
          size="lg"
          onClick={handleSwap}
        >
          Swap
        </Button>
      </CardContent>
    </Card>
  );
}