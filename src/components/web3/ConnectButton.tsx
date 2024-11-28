"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from 'lucide-react';

export function ConnectButton() {
  const handleConnect = () => {
    // Placeholder for future wallet connection implementation
    console.log('Wallet connection will be implemented later');
  };

  return (
    <Button 
      onClick={handleConnect}
      variant="default"
      className="flex items-center gap-2"
    >
      <Wallet className="h-4 w-4" />
      Connect Wallet
    </Button>
  );
}