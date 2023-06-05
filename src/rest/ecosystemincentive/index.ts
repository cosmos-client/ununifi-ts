import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as ecosystemincentive from './module';

cosmosclient.codec.register('/ununifi.ecosystemincentive.MsgRegister', ununifi.ecosystemincentive.MsgRegister);
cosmosclient.codec.register('/ununifi.ecosystemincentive.MsgWithdrawAllRewards', ununifi.ecosystemincentive.MsgWithdrawAllRewards);
cosmosclient.codec.register('/ununifi.ecosystemincentive.MsgWithdrawReward', ununifi.ecosystemincentive.MsgWithdrawReward);
