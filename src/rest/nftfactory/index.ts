import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as nftfactory from './module';

cosmosclient.codec.register('/ununifi.nftfactory.MsgMintNFT', ununifi.nftfactory.MsgMintNFT);
cosmosclient.codec.register('/ununifi.nftfactory.MsgBurnNFT', ununifi.nftfactory.MsgBurnNFT);
cosmosclient.codec.register('/ununifi.nftfactory.MsgCreateClass', ununifi.nftfactory.MsgCreateClass);
cosmosclient.codec.register('/ununifi.nftfactory.MsgUpdateClass', ununifi.nftfactory.MsgUpdateClass);
cosmosclient.codec.register('/ununifi.nftfactory.MsgChangeAdmin', ununifi.nftfactory.MsgChangeAdmin);
cosmosclient.codec.register('/ununifi.nftfactory.MsgUpdateParams', ununifi.nftfactory.MsgUpdateParams);
