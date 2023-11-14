import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as yieldAggregator from './module';

cosmosclient.codec.register('/ununifi.yieldaggregator.MsgCreateVault', ununifi.yieldaggregator.MsgCreateVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgDeleteVault', ununifi.yieldaggregator.MsgDeleteVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgUpdateVault', ununifi.yieldaggregator.MsgUpdateVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgTransferVaultOwnership', ununifi.yieldaggregator.MsgTransferVaultOwnership);

cosmosclient.codec.register('/ununifi.yieldaggregator.MsgRegisterStrategy', ununifi.yieldaggregator.MsgRegisterStrategy);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgUpdateStrategy', ununifi.yieldaggregator.MsgUpdateStrategy);

cosmosclient.codec.register('/ununifi.yieldaggregator.MsgDepositToVault', ununifi.yieldaggregator.MsgDepositToVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgWithdrawFromVault', ununifi.yieldaggregator.MsgWithdrawFromVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgUpdateParams', ununifi.yieldaggregator.MsgUpdateParams);

cosmosclient.codec.register(
  '/ununifi.yieldaggregator.MsgWithdrawFromVaultWithUnbondingTime',
  ununifi.yieldaggregator.MsgWithdrawFromVaultWithUnbondingTime,
);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgRegisterDenomInfos', ununifi.yieldaggregator.MsgRegisterDenomInfos);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgRegisterSymbolInfos', ununifi.yieldaggregator.MsgRegisterSymbolInfos);
cosmosclient.codec.register(
  '/ununifi.yieldaggregator.MsgSetIntermediaryAccountInfo',
  ununifi.yieldaggregator.MsgSetIntermediaryAccountInfo,
);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgReinitVaultTransfer', ununifi.yieldaggregator.MsgReinitVaultTransfer);

cosmosclient.codec.register('/ununifi.yieldaggregator.StrategyWeight', ununifi.yieldaggregator.StrategyWeight);
