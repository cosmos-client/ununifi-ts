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

export function allPositions(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).allPositions();
}

export function addressPositions(sdk: cosmosclient.CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).addressPositions(address);
}

export function position(sdk: cosmosclient.CosmosSDK, positionId: string) {
  return new QueryApi(undefined, sdk.url).position(positionId);
}

export function perpetualFutures(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).perpetualFutures();
}

export function perpetualFuturesMarket(sdk: cosmosclient.CosmosSDK, baseDenom: string, quoteDenom: string) {
  return new QueryApi(undefined, sdk.url).perpetualFuturesMarket(baseDenom, quoteDenom);
}

export function perpetualOptions(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).perpetualOptions();
}

export function perpetualOptionsMarket(sdk: cosmosclient.CosmosSDK, denom: string, quoteDenom: string) {
  return new QueryApi(undefined, sdk.url).perpetualOptionsMarket(denom, quoteDenom);
}

export function perpetualFuturesPositions(
  sdk: cosmosclient.CosmosSDK,
  positionType: 'POSITION_UNKNOWN' | 'LONG' | 'SHORT',
  address: string,
) {
  return new QueryApi(undefined, sdk.url).perpetualFuturesPositionSize(positionType, address);
}

export function dlpTokenRates(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).dLPTokenRates();
}
