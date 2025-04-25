import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import type { WalletState as OnboardWalletState } from '@web3-onboard/core'

// Initialize the injected wallets module
const injected = injectedModule()

// Initialize onboard with required configuration
init({
  wallets: [injected],
  chains: [
    {
      id: '0x1', // Ethereum Mainnet
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/your-infura-key' // Replace with your actual Infura key or RPC URL
    },
    {
      id: '0x89', // Polygon Mainnet
      token: 'MATIC',
      label: 'Polygon Mainnet',
      rpcUrl: 'https://polygon-rpc.com'
    }
  ],
  appMetadata: {
    name: 'Purpletopia NFT Gallery',
    icon: '/logo.png', // Replace with your actual logo path
    description: 'Discover and explore NFTs in Purpletopia Gallery',
  }
})

type WalletContextType = {
  connecting: boolean
  wallet: OnboardWalletState | null
  connectedChain: OnboardWalletState['chains'][0] | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [connectedChain, setConnectedChain] = useState<OnboardWalletState['chains'][0] | null>(null)

  useEffect(() => {
    if (wallet?.provider) {
      const chainId = wallet.chains[0].id
      setConnectedChain(wallet.chains.find((chain) => chain.id === chainId) || null)
    } else {
      setConnectedChain(null)
    }
  }, [wallet])

  const connectWallet = async () => {
    await connect()
  }

  const disconnectWallet = () => {
    if (wallet) {
      disconnect({ label: wallet.label })
    }
  }

  return (
    <WalletContext.Provider 
      value={{
        connecting,
        wallet,
        connectedChain,
        connectWallet,
        disconnectWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
} 