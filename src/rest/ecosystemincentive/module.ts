import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).ecosystemIncentiveParams();
}

export function ecosystemRewards(sdk: cosmosclient.CosmosSDK, address: string, denom?: string) {
  return new QueryApi(undefined, sdk.url).ecosystemRewards(address, denom);
}

export function recipientAddressWithNftId(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).recipientAddressWithNftId(classId, nftId);
}
