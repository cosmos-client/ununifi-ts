import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

// Todo: after swagger.yml change, create module.ts and implement and enable next line.
export * as nftbackedloan from './module';

cosmosclient.codec.register('/ununifi.nftbackedloan.MsgListNft', ununifi.nftbackedloan.MsgListNft);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgCancelNftListing', ununifi.nftbackedloan.MsgCancelNftListing);
// cosmosclient.codec.register('/ununifi.nftbackedloan.MsgExpandListingPeriod', ununifi.nftbackedloan.MsgExpandListingPeriod);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgPlaceBid', ununifi.nftbackedloan.MsgPlaceBid);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgCancelBid', ununifi.nftbackedloan.MsgCancelBid);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgEndNftListing', ununifi.nftbackedloan.MsgEndNftListing);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgPayFullBid', ununifi.nftbackedloan.MsgPayFullBid);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgBorrow', ununifi.nftbackedloan.MsgBorrow);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgRepay', ununifi.nftbackedloan.MsgRepay);
// cosmosclient.codec.register('/ununifi.nftbackedloan.MsgLiquidate', ununifi.nftbackedloan.MsgLiquidate);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgSellingDecision', ununifi.nftbackedloan.MsgSellingDecision);
cosmosclient.codec.register('/ununifi.nftbackedloan.MsgMintNft', ununifi.nftbackedloan.MsgMintNft);
