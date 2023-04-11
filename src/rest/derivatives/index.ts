import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as derivatives from './module';

cosmosclient.codec.register('/ununifi.derivatives.MsgDepositToPool', ununifi.derivatives.MsgDepositToPool);
cosmosclient.codec.register('/ununifi.derivatives.MsgWithdrawFromPool', ununifi.derivatives.MsgWithdrawFromPool);
cosmosclient.codec.register('/ununifi.derivatives.MsgOpenPosition', ununifi.derivatives.MsgOpenPosition);
cosmosclient.codec.register('/ununifi.derivatives.PerpetualFuturesPositionInstance', ununifi.derivatives.PerpetualFuturesPositionInstance);
cosmosclient.codec.register('/ununifi.derivatives.PerpetualOptionsPositionInstance', ununifi.derivatives.PerpetualOptionsPositionInstance);
cosmosclient.codec.register('/ununifi.derivatives.MsgOpenPosition', ununifi.derivatives.MsgOpenPosition);
cosmosclient.codec.register('/ununifi.derivatives.MsgClosePosition', ununifi.derivatives.MsgClosePosition);
cosmosclient.codec.register('/ununifi.derivatives.MsgReportLiquidation', ununifi.derivatives.MsgReportLiquidation);
