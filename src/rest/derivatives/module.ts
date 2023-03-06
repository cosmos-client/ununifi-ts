import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).derivativesParams();
}

export function estimateDLPTokenAmount(sdk: cosmosclient.CosmosSDK, mintDenom?: string, mintAmount?: string) {
  return new QueryApi(undefined, sdk.url).estimateDLPTokenAmount(mintDenom, mintAmount);
}

export function estimateRedeemAmount(sdk: cosmosclient.CosmosSDK, redeemDenom?: string, lptAmount?: string) {
  return new QueryApi(undefined, sdk.url).estimateDLPTokenAmount(redeemDenom, lptAmount);
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

export function perpetualFuturePositions(
  sdk: cosmosclient.CosmosSDK,
  positionType: 'POSITION_UNKNOWN' | 'LONG' | 'SHORT',
  address: string,
) {
  return new QueryApi(undefined, sdk.url).perpetualFuturesPositionSize(positionType, address);
}
