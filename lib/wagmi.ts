import { createConfig, configureChains } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WALLET_CONNECT_PROJECT_ID } from '@/config/env';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
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
    }),
  ],
});