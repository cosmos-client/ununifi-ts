import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).ecosystemIncentiveParams();
}

export function reward(sdk: cosmosclient.CosmosSDK, subjectAddr: string, denom: string) {
  return new QueryApi(undefined, sdk.url).reward(subjectAddr, denom);
}

export function allRewards(sdk: cosmosclient.CosmosSDK, subjectAddr: string) {
  return new QueryApi(undefined, sdk.url).allRewards(subjectAddr);
}
