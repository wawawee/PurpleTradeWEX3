interface TokenBalanceProps {
  token: {
    symbol: string;
  };
  className?: string;
}

export function TokenBalance({ token, className }: TokenBalanceProps) {
  return (
    <div className={className}>
      0.00 {token.symbol}
    </div>
  );
}