import { CaipNetwork, createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
// import {  } from "@reown/appkit/networks";

export const scrollSepoliaNetwork:CaipNetwork = {
    id: "eip155:4202",
    chainId: 4202,
    chainNamespace: "eip155",
    name: "Lisk Sepolia",
    currency: "ETH",
    explorerUrl: import.meta.env.VITE_SCROLL_SEPOLIA_EXPLORER_URL,
    rpcUrl: import.meta.env.VITE_SCROLL_SEPOLIA_RPC_URL,
};

// 1. Get projectId
const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

// 2. Set the networks
const networks = [scrollSepoliaNetwork];

// 3. Create a metadata object - optional
const metadata = {
    name: "Scrollswap",
    description: "Swap Tokens Swiftly",
    url: "https://mywebsite.com", 
    icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
export const appkit = createAppKit({
    adapters: [new EthersAdapter()],
    networks,
    metadata,
    projectId,
    allowUnsupportedChain: false,
    allWallets: "SHOW",
    defaultNetwork: scrollSepoliaNetwork,
    enableEIP6963: true,
    features: {
        analytics: true,
        allWallets: true,
        email: false,
        socials: [],
    },
});
