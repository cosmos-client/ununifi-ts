import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as yieldAggregator from './module';

cosmosclient.codec.register('/ununifi.chain.yieldaggregator.MsgDepositToVault', ununifi.chain.yieldaggregator.MsgDepositToVault);
cosmosclient.codec.register('/ununifi.chain.yieldaggregator.MsgWithdrawFromVault', ununifi.chain.yieldaggregator.MsgWithdrawFromVault);
cosmosclient.codec.register('/ununifi.chain.yieldaggregator.MsgCreateVault', ununifi.chain.yieldaggregator.MsgCreateVault);
cosmosclient.codec.register('/ununifi.chain.yieldaggregator.StrategyWeight', ununifi.chain.yieldaggregator.StrategyWeight);
cosmosclient.codec.register('/ununifi.chain.yieldaggregator.MsgDeleteVault', ununifi.chain.yieldaggregator.MsgDeleteVault);
cosmosclient.codec.register(
  '/ununifi.chain.yieldaggregator.MsgTransferVaultOwnership',
  ununifi.chain.yieldaggregator.MsgTransferVaultOwnership,
);
