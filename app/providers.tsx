"use client";

import { ThemeProvider } from "next-themes";
import { WagmiConfig } from "wagmi";
import { config } from "@/lib/wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </WagmiConfig>
  );
}