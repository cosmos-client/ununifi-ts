import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).yieldAggregatorParams();
}

export function strategyAll(sdk: cosmosclient.CosmosSDK, denom?: string) {
  return new QueryApi(undefined, sdk.url).strategyAll(denom);
}

export function strategy(sdk: cosmosclient.CosmosSDK, id: string, denom?: string) {
  return new QueryApi(undefined, sdk.url).strategy(id, denom);
}

export function vaultAll(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).vaultAll();
}

export function vault(sdk: cosmosclient.CosmosSDK, id: string) {
  return new QueryApi(undefined, sdk.url).vault(id);
}

export function estimateMintAmount(sdk: cosmosclient.CosmosSDK, id: string, amount?: string) {
  return new QueryApi(undefined, sdk.url).estimateMintAmount(id, amount);
}

export function estimateRedeemAmount(sdk: cosmosclient.CosmosSDK, id: string, amount?: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemAmount(id, amount);
}
