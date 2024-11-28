"use client";

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { getTokenBalance } from '@/lib/token';
import type { Token } from '@/types/token';

export function useTokenBalance(token: Token) {
  const { address: account } = useAccount();
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBalance() {
      if (!account || !token) return;
      
      try {
        setLoading(true);
        const balance = await getTokenBalance(token.address, account);
        setBalance(balance);
      } catch (error) {
        console.error('Error fetching token balance:', error);
        setBalance('0');
      } finally {
        setLoading(false);
      }
    }

    fetchBalance();
  }, [account, token]);

  return { balance, loading };
}