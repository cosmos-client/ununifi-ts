import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).nftmarketParams();
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

export function loans(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).loans();
}

export function cdpsListed(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).cDPsList();
}

export function nftBids(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).nftBids(classId, nftId);
}

export function bidderBids(sdk: cosmosclient.CosmosSDK, bidder: cosmosclient.AccAddress) {
  return new QueryApi(undefined, sdk.url).bidderBids(bidder.toString());
}
