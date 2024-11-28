import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { TokenSwap } from "@/components/web3/TokenSwap";
import { ConnectButton } from "@/components/web3/ConnectButton";

export default function SwapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ConnectButton />
            <UserNav />
          </div>
        </div>
      </div>
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Swap Tokens</h2>
        </div>
        <div className="mx-auto max-w-md">
          <TokenSwap />
        </div>
      </main>
    </div>
  );
}