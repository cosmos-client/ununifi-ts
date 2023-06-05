import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).ecosystemIncentiveParams();
}

export function recipientContainer(sdk: cosmosclient.CosmosSDK, id: string) {
  return new QueryApi(undefined, sdk.url).recipientContainer(id);
}

export function reward(sdk: cosmosclient.CosmosSDK, subjectAddr: string, denom: string) {
  return new QueryApi(undefined, sdk.url).reward(subjectAddr, denom);
}

export function allRewards(sdk: cosmosclient.CosmosSDK, subjectAddr: string) {
  return new QueryApi(undefined, sdk.url).allRewards(subjectAddr);
}

export function belongingRecipientContainerIdsByAddr(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).belongingRecipientContainerIdsByAddr(address);
}
