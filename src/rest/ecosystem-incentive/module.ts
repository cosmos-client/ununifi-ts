import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).ecosystemincentiveParams();
}

export function incentiveUnit(sdk: cosmosclient.CosmosSDK, incentiveUnitId: string) {
  return new QueryApi(undefined, sdk.url).incentiveUnit(incentiveUnitId);
}

export function recordedIncentiveUnitId(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).recordedIncentiveUnitId(classId, nftId);
}

export function reward(sdk: cosmosclient.CosmosSDK, subjectAddr: string, denom: string) {
  return new QueryApi(undefined, sdk.url).reward(subjectAddr, denom);
}

export function allRewards(sdk: cosmosclient.CosmosSDK, subjectAddr: string) {
  return new QueryApi(undefined, sdk.url).allRewards(subjectAddr);
}
