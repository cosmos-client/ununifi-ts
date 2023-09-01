import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).ecosystemIncentiveParams();
}

export function reward(sdk: cosmosclient.CosmosSDK, address: string, denom?: string) {
  return new QueryApi(undefined, sdk.url).ecosystemRewards(address, denom);
}
