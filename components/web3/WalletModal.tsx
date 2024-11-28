"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SUPPORTED_WALLETS } from '@/lib/wallet';
import { useWalletConnection } from '@/hooks/useWalletConnection';
import { Loader2 } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connectWallet, error, isConnecting } = useWalletConnection();

  const handleConnect = async (type: 'METAMASK' | 'WALLET_CONNECT') => {
    try {
      await connectWallet(type);
      onClose();
    } catch (err) {
      // Error is handled in the hook
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && (
            <div className="text-sm text-red-500 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              {error}
            </div>
          )}
          {Object.entries(SUPPORTED_WALLETS).map(([key, wallet]) => (
            <Button
              key={key}
              onClick={() => handleConnect(key as 'METAMASK' | 'WALLET_CONNECT')}
              className="w-full justify-start gap-3"
              variant="outline"
              disabled={isConnecting}
            >
              {isConnecting ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="h-6 w-6"
                />
              )}
              {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}