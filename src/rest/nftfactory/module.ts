import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).nftFactoryParams();
}

export function classAuthorityMetadata(sdk: cosmosclient.CosmosSDK, creator: string, subclass: string) {
  return new QueryApi(undefined, sdk.url).classAuthorityMetadata(creator, subclass);
}

export function classesFromCreator(sdk: cosmosclient.CosmosSDK, creator: string) {
  return new QueryApi(undefined, sdk.url).classesFromCreator(creator);
}
