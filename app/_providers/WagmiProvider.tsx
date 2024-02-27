import React from "react";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from "wagmi";
import { polygonMumbai, hardhat } from "viem/chains";

type WagmiProviderType = {
  children: React.ReactNode;
};

const chains = [polygonMumbai, hardhat];
const projectId = process.env.NEXT_PUBLIC_W3C_PID;

const metadata = {
       name: 'io-sign',
       description: 'io-sign Example',
       url: 'https://web3modal.com',
       icons: ['https://avatars.githubusercontent.com/u/37784886']
     }
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })
const WagmiProvider = ({ children }: WagmiProviderType) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    </>
  );
};

export default WagmiProvider;