import { createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { createPublicClient, http } from 'viem';

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
});

export const config = createConfig({
  publicClient,
});