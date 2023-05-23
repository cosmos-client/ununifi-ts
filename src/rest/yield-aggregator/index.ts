import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as yieldAggregator from './module';

cosmosclient.codec.register('/ununifi.yieldaggregator.MsgDepositToVault', ununifi.yieldaggregator.MsgDepositToVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgWithdrawFromVault', ununifi.yieldaggregator.MsgWithdrawFromVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgCreateVault', ununifi.yieldaggregator.MsgCreateVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.StrategyWeight', ununifi.yieldaggregator.StrategyWeight);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgDeleteVault', ununifi.yieldaggregator.MsgDeleteVault);
cosmosclient.codec.register('/ununifi.yieldaggregator.MsgTransferVaultOwnership', ununifi.yieldaggregator.MsgTransferVaultOwnership);
