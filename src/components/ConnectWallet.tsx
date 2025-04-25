import { useWallet } from "@/context/WalletContext"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ConnectWallet() {
  const { connecting, wallet, connectWallet, disconnectWallet } = useWallet()

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (connecting) {
    return (
      <Button disabled className="min-w-[150px]">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Connecting...
      </Button>
    )
  }

  if (wallet && wallet.accounts.length > 0) {
    const address = wallet.accounts[0].address
    
    return (
      <Button 
        variant="outline" 
        onClick={disconnectWallet}
        className="min-w-[150px]"
      >
        {shortenAddress(address)}
      </Button>
    )
  }

  return (
    <Button onClick={connectWallet} className="min-w-[150px]">
      Connect Wallet
    </Button>
  )
} 