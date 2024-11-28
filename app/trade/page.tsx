import { MainNav } from "@/components/main-nav";
import { OrderBook } from "@/components/web3/OrderBook";
import { PriceChart } from "@/components/web3/PriceChart";
import { ConnectButton } from "@/components/web3/ConnectButton";
import { TokenBalance } from "@/components/web3/TokenBalance";
import { TOKENS } from "@/config/tokens";

export default function TradePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-4 mr-4">
              <TokenBalance token={TOKENS.FTSEB} className="text-sm" />
              <TokenBalance token={TOKENS.USDC} className="text-sm" />
            </div>
            <ConnectButton />
          </div>
        </div>
      </div>
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">FTSEB/USDC</h2>
          <div className="text-muted-foreground">
            Last Price: <span className="text-primary">$1.203</span>
          </div>
        </div>
        <div className="grid gap-4">
          <PriceChart />
          <OrderBook />
        </div>
      </main>
    </div>
  );
}