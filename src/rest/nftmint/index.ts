import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as nftfactory from './module';

cosmosclient.codec.register('/ununifi.nftfactory.MsgCreateClass', ununifi.nftfactory.MsgCreateClass);
cosmosclient.codec.register('/ununifi.nftfactory.MsgSendClassOwnership', ununifi.nftfactory.MsgSendClassOwnership);
cosmosclient.codec.register('/ununifi.nftfactory.MsgUpdateBaseTokenUri', ununifi.nftfactory.MsgUpdateBaseTokenUri);
cosmosclient.codec.register('/ununifi.nftfactory.MsgUpdateTokenSupplyCap', ununifi.nftfactory.MsgUpdateTokenSupplyCap);
cosmosclient.codec.register('/ununifi.nftfactory.MsgMintNFT', ununifi.nftfactory.MsgMintNFT);
cosmosclient.codec.register('/ununifi.nftfactory.MsgBurnNFT', ununifi.nftfactory.MsgBurnNFT);
