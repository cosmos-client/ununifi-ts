import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as nftmint from './module';

cosmosclient.codec.register('/ununifi.nftmint.MsgCreateClass', ununifi.nftmint.MsgCreateClass);
cosmosclient.codec.register('/ununifi.nftmint.MsgSendClassOwnership', ununifi.nftmint.MsgSendClassOwnership);
cosmosclient.codec.register('/ununifi.nftmint.MsgUpdateBaseTokenUri', ununifi.nftmint.MsgUpdateBaseTokenUri);
cosmosclient.codec.register('/ununifi.nftmint.MsgUpdateTokenSupplyCap', ununifi.nftmint.MsgUpdateTokenSupplyCap);
cosmosclient.codec.register('/ununifi.nftmint.MsgMintNFT', ununifi.nftmint.MsgMintNFT);
cosmosclient.codec.register('/ununifi.nftmint.MsgBurnNFT', ununifi.nftmint.MsgBurnNFT);
