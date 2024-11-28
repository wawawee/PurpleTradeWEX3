import { getAddress } from 'ethers/lib/utils';
import { WALLET_CONNECT_PROJECT_ID } from '@/config/env';

export function isValidAddress(address: string): boolean {
  try {
    return !!getAddress(address);
  } catch {
    return false;
  }
}

export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const SUPPORTED_WALLETS = {
  METAMASK: {
    name: 'MetaMask',
    icon: '/wallets/metamask.svg'
  },
  WALLET_CONNECT: {
    name: 'WalletConnect',
    icon: '/wallets/walletconnect.svg'
  }
};