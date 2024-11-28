"use client";

import { useTokenBalance } from '@/hooks/useTokenBalance';
import { Token } from '@/types/token';
import { formatNumber } from '@/lib/utils';

interface TokenBalanceProps {
  token: Token;
  className?: string;
}

export function TokenBalance({ token, className }: TokenBalanceProps) {
  const { balance, loading } = useTokenBalance(token);

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  return (
    <div className={className}>
      {formatNumber(parseFloat(balance))} {token.symbol}
    </div>
  );
}