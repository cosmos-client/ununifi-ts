import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).nftBackedLoanParams();
}

export function nftListing(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).nftListing(classId, nftId);
}

export function listedNfts(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).listedNfts();
}

export function listedClasses(sdk: cosmosclient.CosmosSDK, nftLimit?: number) {
  return new QueryApi(undefined, sdk.url).listedClasses(nftLimit);
}

export function listedClass(sdk: cosmosclient.CosmosSDK, classId: string, nftLimit: number) {
  return new QueryApi(undefined, sdk.url).listedClass(classId, nftLimit);
}

// export function loans(sdk: cosmosclient.CosmosSDK) {
//   return new QueryApi(undefined, sdk.url).loans();
// }

export function loan(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).loan(classId, nftId);
}


export function nftBids(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).nftBids(classId, nftId);
}

export function bidderBids(sdk: cosmosclient.CosmosSDK, bidder: string) {
  return new QueryApi(undefined, sdk.url).bidderBids(bidder);
}

export function liquidation(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).liquidation(classId, nftId);
}

// export function paymentStatus(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string, bidder: string) {
//   return new QueryApi(undefined, sdk.url).paymentStatus(classId, nftId, bidder);
// }

export function rewards(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).rewards(address);
}
