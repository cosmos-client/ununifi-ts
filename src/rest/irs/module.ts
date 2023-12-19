import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).irsParams();
}

export function vaults(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).vaults();
}

export function vaultByContract(sdk: cosmosclient.CosmosSDK, strategyContract: string) {
  return new QueryApi(undefined, sdk.url).vaultByContract(strategyContract);
}

export function vaultDetails(sdk: cosmosclient.CosmosSDK, strategyContract: string, maturity: string) {
  return new QueryApi(undefined, sdk.url).vaultDetails(strategyContract, maturity);
}

export function allTranches(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).allTranches();
}

export function tranches(sdk: cosmosclient.CosmosSDK, strategyContract: string) {
  return new QueryApi(undefined, sdk.url).tranches(strategyContract);
}

export function tranche(sdk: cosmosclient.CosmosSDK, id: string) {
  return new QueryApi(undefined, sdk.url).tranche(id);
}

export function estimateSwapInPool(sdk: cosmosclient.CosmosSDK, poolId: string, denom: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateSwapInPool(poolId, denom, amount);
}

export function estimateMintPtYtPair(sdk: cosmosclient.CosmosSDK, poolId: string, denom: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateMintPtYtPair(poolId, denom, amount);
}

export function estimateRedeemPtYtPair(sdk: cosmosclient.CosmosSDK, poolId: string, ytAmount: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemPtYtPair(poolId, ytAmount);
}

export function estimateRedeemYt(sdk: cosmosclient.CosmosSDK, poolId: string, denom: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemYt(poolId, denom, amount);
}

export function estimateMintLiquidityPoolToken(sdk: cosmosclient.CosmosSDK, poolId: string, desiredAmount: string) {
  return new QueryApi(undefined, sdk.url).estimateMintLiquidityPoolToken(poolId, desiredAmount);
}

export function estimateRedeemLiquidityPoolToken(sdk: cosmosclient.CosmosSDK, poolId: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemLiquidityPoolToken(poolId, amount);
}

export function estimateRequiredUtSwapToYt(sdk: cosmosclient.CosmosSDK, poolId: string, desiredAmount: string) {
  return new QueryApi(undefined, sdk.url).estimateRequiredUtSwapToYt(poolId, desiredAmount);
}

export function estimateSwapMaturedYtToUt(sdk: cosmosclient.CosmosSDK, poolId: string, ytAmount: string) {
  return new QueryApi(undefined, sdk.url).estimateSwapMaturedYtToUt(poolId, ytAmount);
}
