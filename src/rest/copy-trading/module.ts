import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).copyTradingParams();
}

export function exemplaryTraderAll(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).exemplaryTraderAll();
}

export function exemplaryTrader(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).exemplaryTrader(address);
}

export function exemplaryTraderTracing(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).exemplaryTraderTracing(address);
}

export function tracingAll(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).tracingAll();
}

export function tracing(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).tracing(address);
}
