import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@/components/web3/ConnectButton";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="border-b border-border/40">
        <div className="flex h-16 items-center px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Overview
            </Link>
            <Link
              to="/trade"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Trade
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ConnectButton />
          </div>
        </div>
      </div>
      
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              World Equity X
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Revolutionizing equity markets through blockchain technology. Trade stocks as tokens and unlock global investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center mt-4">
              <Button asChild size="lg" className="w-full sm:w-36 h-9 text-sm">
                <Link to="/trade" className="gap-2">
                  Start Trading <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-36 h-9 text-sm">
                <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  Buy Crypto <CreditCard className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}