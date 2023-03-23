import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as yieldAggregator from './module';

cosmosclient.codec.register('/ununifi.yieldAggregator.MsgDepositToVault', ununifi.chain.yieldaggregator.MsgDepositToVault);
cosmosclient.codec.register('/ununifi.yieldAggregator.MsgWithdrawFromVault', ununifi.chain.yieldaggregator.MsgWithdrawFromVault);
cosmosclient.codec.register('/ununifi.yieldAggregator.MsgCreateVault', ununifi.chain.yieldaggregator.MsgCreateVault);
cosmosclient.codec.register('/ununifi.yieldAggregator.MsgMsgDeleteVault', ununifi.chain.yieldaggregator.MsgDeleteVault);
cosmosclient.codec.register('/ununifi.yieldAggregator.MsgTransferVaultOwnership', ununifi.chain.yieldaggregator.MsgTransferVaultOwnership);
