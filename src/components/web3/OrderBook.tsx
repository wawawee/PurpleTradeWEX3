import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpDown } from 'lucide-react';
import { TOKENS } from '@/config/tokens';
import { TokenBalance } from './TokenBalance';

type Order = {
  price: number;
  amount: number;
  total: number;
};

export function OrderBook() {
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState('limit');

  // Mock data for order book
  const asks: Order[] = [
    { price: 1.205, amount: 100.0, total: 120.5 },
    { price: 1.204, amount: 50.0, total: 60.2 },
    { price: 1.203, amount: 75.0, total: 90.225 },
  ];

  const bids: Order[] = [
    { price: 1.202, amount: 120.0, total: 144.24 },
    { price: 1.201, amount: 80.0, total: 96.08 },
    { price: 1.200, amount: 200.0, total: 240.0 },
  ];

  const handleSubmitOrder = (side: 'buy' | 'sell') => {
    console.log('Order submitted:', { side, price, amount, orderType });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* Order Book */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Order Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 text-xs text-muted-foreground mb-2">
              <span>Price (USDC)</span>
              <span>Amount (FTSEB)</span>
              <span>Total (USDC)</span>
            </div>
            
            {/* Asks (Sell Orders) */}
            <div className="space-y-1">
              {asks.map((order, i) => (
                <div key={i} className="grid grid-cols-3 text-sm text-red-500">
                  <span>{order.price}</span>
                  <span>{order.amount}</span>
                  <span>{order.total}</span>
                </div>
              ))}
            </div>
            
            {/* Current Price */}
            <div className="flex items-center justify-between py-2 border-y border-border">
              <span className="text-lg font-bold">1.203 USDC</span>
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            </div>

            {/* Bids (Buy Orders) */}
            <div className="space-y-1">
              {bids.map((order, i) => (
                <div key={i} className="grid grid-cols-3 text-sm text-green-500">
                  <span>{order.price}</span>
                  <span>{order.amount}</span>
                  <span>{order.total}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trading Form */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Place Order</CardTitle>
            <div className="flex space-x-4 text-sm">
              <TokenBalance token={TOKENS.FTSEB} />
              <TokenBalance token={TOKENS.USDC} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="limit" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="limit" onClick={() => setOrderType('limit')}>Limit</TabsTrigger>
              <TabsTrigger value="market" onClick={() => setOrderType('market')}>Market</TabsTrigger>
            </TabsList>

            <TabsContent value="limit" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Price (USDC)</label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    pattern="[0-9]*[.]?[0-9]*"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9.]/g, '');
                      if (value === '' || /^\d*\.?\d*$/.test(value)) {
                        setPrice(value);
                      }
                    }}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Amount (FTSEB)</label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    pattern="[0-9]*[.]?[0-9]*"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9.]/g, '');
                      if (value === '' || /^\d*\.?\d*$/.test(value)) {
                        setAmount(value);
                      }
                    }}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={() => handleSubmitOrder('buy')}
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    Buy FTSEB
                  </Button>
                  <Button 
                    onClick={() => handleSubmitOrder('sell')}
                    className="w-full bg-red-500 hover:bg-red-600"
                  >
                    Sell FTSEB
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="market" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Amount (FTSEB)</label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    pattern="[0-9]*[.]?[0-9]*"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9.]/g, '');
                      if (value === '' || /^\d*\.?\d*$/.test(value)) {
                        setAmount(value);
                      }
                    }}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={() => handleSubmitOrder('buy')}
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    Buy FTSEB
                  </Button>
                  <Button 
                    onClick={() => handleSubmitOrder('sell')}
                    className="w-full bg-red-500 hover:bg-red-600"
                  >
                    Sell FTSEB
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}