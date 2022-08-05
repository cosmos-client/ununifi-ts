import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).nftmintParams();
}

export function classAttributes(sdk: cosmosclient.CosmosSDK, classId: string) {
  return new QueryApi(undefined, sdk.url).classAttributes(classId);
}

export function classIdsByName(sdk: cosmosclient.CosmosSDK, className: string) {
  return new QueryApi(undefined, sdk.url).classIdsByName(className);
}

export function classIdsByOwner(sdk: cosmosclient.CosmosSDK, owner: cosmosclient.AccAddress) {
  return new QueryApi(undefined, sdk.url).classIdsByOwner(owner.toString());
}

export function nftMinter(sdk: cosmosclient.CosmosSDK, classId: string, nftId: string) {
  return new QueryApi(undefined, sdk.url).nFTMinter(classId, nftId);
}
