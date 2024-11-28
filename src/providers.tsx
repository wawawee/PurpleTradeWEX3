import { WagmiConfig } from "wagmi";
import { config } from "./lib/wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <div className="dark">{children}</div>
    </WagmiConfig>
  );
}