import { ethers } from 'ethers';
import ERC20_ABI from '@/config/abis/erc20.json';

export async function getTokenBalance(tokenAddress: string, accountAddress: string): Promise<string> {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    const balance = await tokenContract.balanceOf(accountAddress);
    return ethers.utils.formatUnits(balance, await tokenContract.decimals());
  } catch (error) {
    console.error('Error getting token balance:', error);
    return '0';
  }
}

export async function approveToken(
  tokenAddress: string,
  spenderAddress: string,
  amount: string
): Promise<boolean> {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
    
    const tx = await tokenContract.approve(spenderAddress, amount);
    await tx.wait();
    return true;
  } catch (error) {
    console.error('Error approving token:', error);
    return false;
  }
}