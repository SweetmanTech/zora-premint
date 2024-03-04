import {
  PremintConfigV2,
  PremintConfigVersion,
  PreminterDomain,
  createPremintClient,
  defaultTokenConfigV2MintArguments,
  getDefaultFixedPriceMinterAddress,
  getPremintCollectionAddress,
  makeNewPremint,
  v2Types,
} from '@zoralabs/protocol-sdk';
import { zeroAddress, type Address, type PublicClient, type WalletClient } from 'viem';
import { baseSepolia } from 'viem/chains';
import { basePublicClient } from './publicClient';

async function createForFree({
  walletClient,
  creatorAccount,
}: {
  // wallet client that will submit the transaction
  walletClient: WalletClient;
  // address of the token contract
  creatorAccount: Address;
}) {
  const collection = {
    contractAdmin: creatorAccount,
    contractName: 'Testing Contract',
    contractURI: 'ipfs://bafkreiainxen4b4wz4ubylvbhons6rembxdet4a262nf2lziclqvv7au3e',
  };

  const domain = {
    chainId: baseSepolia.id,
    name: PreminterDomain,
    version: PremintConfigVersion.V2,
    verifyingContract: collection,
  };

  const fixedPriceMinter = getDefaultFixedPriceMinterAddress(baseSepolia.id);

  const tokenConfig = {
    fixedPriceMinter,
    ...defaultTokenConfigV2MintArguments(),
    payoutRecipient: creatorAccount,
    createReferral: zeroAddress,
    tokenCreationConfig: {
      tokenURI: 'ipfs://bafkreice23maski3x52tsfqgxstx3kbiifnt5jotg3a5ynvve53c4soi2u',
    },
  } as any;

  const uid = 1;
  const premintConfig = makeNewPremint({ tokenConfig, uid });
  const dataToSign = {
    domain,
    types: v2Types,
    message: premintConfig as PremintConfigV2,
    primaryType: 'CreatorAttribution',
  } as any;

  const signature = await walletClient.signTypedData({
    account: creatorAccount,
    ...dataToSign,
  });

  return {
    signature,
  };
}

export default createForFree;
