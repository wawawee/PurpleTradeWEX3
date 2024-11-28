"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { WalletModal } from './WalletModal';
import { Wallet } from 'lucide-react';
import { shortenAddress } from '@/lib/utils';
import { useWalletConnection } from '@/hooks/useWalletConnection';

export function ConnectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, isConnected, disconnectWallet } = useWalletConnection();

  const handleClick = () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button 
        onClick={handleClick}
        variant={isConnected ? "outline" : "default"}
        className="flex items-center gap-2"
      >
        <Wallet className="h-4 w-4" />
        {isConnected ? shortenAddress(address!) : "Connect Wallet"}
      </Button>
      
      <WalletModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}