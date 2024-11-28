import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Lock, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@/components/web3/ConnectButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="border-b border-border/40">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ConnectButton />
          </div>
        </div>
      </div>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              World Equity X
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Revolutionizing equity markets through blockchain technology. Trade stocks as tokens and unlock global investment opportunities.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/trade" className="gap-2">
                  Start Trading <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  Buy Crypto <CreditCard className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container space-y-6 bg-slate-50/5 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Tokenized Stocks</h3>
              <p className="text-muted-foreground mt-2">
                Trade traditional stocks as digital tokens, enabling 24/7 market access and fractional ownership.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Advanced Trading</h3>
              <p className="text-muted-foreground mt-2">
                Access sophisticated trading tools, real-time market data, and advanced order types.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure Platform</h3>
              <p className="text-muted-foreground mt-2">
                Built on blockchain technology with institutional-grade security measures and transparent operations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] space-y-6 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Join the Future of Trading
            </h2>
            <p className="max-w-[42rem] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Experience seamless trading of tokenized stocks. Connect your wallet to start trading or swap tokens instantly.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/trade">Start Trading Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}