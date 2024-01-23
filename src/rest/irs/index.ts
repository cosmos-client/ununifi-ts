import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as irs from './module';

cosmosclient.codec.register('/ununifi.irs.MsgDepositLiquidity', ununifi.irs.MsgDepositLiquidity);
cosmosclient.codec.register('/ununifi.irs.MsgWithdrawLiquidity', ununifi.irs.MsgWithdrawLiquidity);
cosmosclient.codec.register('/ununifi.irs.MsgDepositToTranche', ununifi.irs.MsgDepositToTranche);
cosmosclient.codec.register('/ununifi.irs.MsgWithdrawFromTranche', ununifi.irs.MsgWithdrawFromTranche);
