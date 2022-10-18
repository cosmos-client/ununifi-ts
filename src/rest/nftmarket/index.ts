import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

// Todo: after swagger.yml change, create module.ts and implement and enable next line.
export * as nftmarket from './module';

cosmosclient.codec.register('/ununifi.nftmarket.MsgListNft', ununifi.nftmarket.MsgListNft);
cosmosclient.codec.register('/ununifi.nftmarket.MsgCancelNftListing', ununifi.nftmarket.MsgCancelNftListing);
cosmosclient.codec.register('/ununifi.nftmarket.MsgExpandListingPeriod', ununifi.nftmarket.MsgExpandListingPeriod);
cosmosclient.codec.register('/ununifi.nftmarket.MsgPlaceBid', ununifi.nftmarket.MsgPlaceBid);
cosmosclient.codec.register('/ununifi.nftmarket.MsgCancelBid', ununifi.nftmarket.MsgCancelBid);
cosmosclient.codec.register('/ununifi.nftmarket.MsgEndNftListing', ununifi.nftmarket.MsgEndNftListing);
cosmosclient.codec.register('/ununifi.nftmarket.MsgPayFullBid', ununifi.nftmarket.MsgPayFullBid);
cosmosclient.codec.register('/ununifi.nftmarket.MsgBorrow', ununifi.nftmarket.MsgBorrow);
cosmosclient.codec.register('/ununifi.nftmarket.MsgRepay', ununifi.nftmarket.MsgRepay);
cosmosclient.codec.register('/ununifi.nftmarket.MsgMintStableCoin', ununifi.nftmarket.MsgMintStableCoin);
cosmosclient.codec.register('/ununifi.nftmarket.MsgBurnStableCoin', ununifi.nftmarket.MsgBurnStableCoin);
cosmosclient.codec.register('/ununifi.nftmarket.MsgLiquidate', ununifi.nftmarket.MsgLiquidate);
cosmosclient.codec.register('/ununifi.nftmarket.MsgSellingDecision', ununifi.nftmarket.MsgSellingDecision);
