import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).derivativesParams();
}

export function nominalAPY(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).liquidityProviderTokenNominalAPY();
}

export function realAPY(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).liquidityProviderTokenRealAPY();
}

export function pool(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).pool();
}

export function allPositions(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).allPositions();
}

export function positions(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).addressPositions(address);
}

export function wholePerpetualFutures(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).perpetualFutures();
}

export function perpetualFuture(sdk: cosmosclient.CosmosSDK, denom: string, quoteDenom: string) {
  return new QueryApi(undefined, sdk.url).perpetualFuturesMarket(denom, quoteDenom);
}

export function wholePerpetualOptions(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).perpetualOptions();
}

export function perpetualOption(sdk: cosmosclient.CosmosSDK, denom: string, quoteDenom: string) {
  return new QueryApi(undefined, sdk.url).perpetualOptionsMarket(denom, quoteDenom);
}
