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

export function estimateRedeemPtYtPair(sdk: cosmosclient.CosmosSDK, poolId: string, denom: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemPtYtPair(poolId, denom, amount);
}

export function estimateMintLiquidityPoolToken(sdk: cosmosclient.CosmosSDK, poolId: string, denom: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateMintLiquidityPoolToken(poolId, denom, amount);
}

export function estimateRedeemLiquidityPoolToken(sdk: cosmosclient.CosmosSDK, poolId: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemLiquidityPoolToken(poolId, amount);
}

export function estimateSwapToYt(sdk: cosmosclient.CosmosSDK, poolId: string, denom: string, amount: string) {
  return new QueryApi(undefined, sdk.url).estimateSwapToYt(poolId, denom, amount);
}

export function estimateRequiredDepositSwapToYt(sdk: cosmosclient.CosmosSDK, poolId: string, desiredAmount: string) {
  return new QueryApi(undefined, sdk.url).estimateRequiredDepositSwapToYt(poolId, desiredAmount);
}

export function estimateRedeemMaturedYt(sdk: cosmosclient.CosmosSDK, poolId: string, ytAmount: string) {
  return new QueryApi(undefined, sdk.url).estimateRedeemMaturedYt(poolId, ytAmount);
}

export function tranchePtAPYs(sdk: cosmosclient.CosmosSDK, id: string, depositAmount?: string) {
  return new QueryApi(undefined, sdk.url).tranchePtAPYs(id, depositAmount);
}

export function trancheYtAPYs(sdk: cosmosclient.CosmosSDK, id: string, desiredYtAmount?: string) {
  return new QueryApi(undefined, sdk.url).trancheYtAPYs(id, desiredYtAmount);
}

export function tranchePoolAPYs(sdk: cosmosclient.CosmosSDK, id: string, depositAmount?: string) {
  return new QueryApi(undefined, sdk.url).tranchePoolAPYs(id, depositAmount);
}
