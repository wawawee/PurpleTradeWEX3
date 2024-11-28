"use client";

import { useState, useCallback } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WALLET_CONNECT_PROJECT_ID } from '@/config/env';
import { isMobileDevice } from '@/lib/wallet';

export function useWalletConnection() {
  const [error, setError] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const { connectAsync } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const connectWallet = useCallback(async (type: 'METAMASK' | 'WALLET_CONNECT') => {
    try {
      setError('');
      setIsConnecting(true);
      
      const isMobile = isMobileDevice();
      
      if (type === 'METAMASK') {
        if (isMobile && !window.ethereum) {
          window.open('https://metamask.app.link/dapp/' + window.location.host);
          return;
        }
        
        await connectAsync({
          connector: new InjectedConnector()
        });
      } else if (type === 'WALLET_CONNECT') {
        await connectAsync({
          connector: new WalletConnectConnector({
            options: {
              projectId: WALLET_CONNECT_PROJECT_ID,
              showQrModal: true,
              metadata: {
                name: 'WEX Platform',
                description: 'Web3 Experience Platform',
                url: window.location.origin,
                icons: [`${window.location.origin}/logo.png`]
              }
            },
          })
        });
      }
    } catch (err) {
      setError('Failed to connect wallet');
      console.error('Wallet connection error:', err);
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, [connectAsync]);

  const disconnectWallet = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (err) {
      console.error('Disconnect error:', err);
    }
  }, [disconnectAsync]);

  return {
    connectWallet,
    disconnectWallet,
    address,
    isConnected,
    isConnecting,
    error
  };
}