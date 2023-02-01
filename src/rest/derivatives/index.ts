import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as derivatives from './module';

cosmosclient.codec.register('/ununifi.derivatives.MsgMintLiquidityProviderToken', ununifi.derivatives.MsgMintLiquidityProviderToken);
cosmosclient.codec.register('/ununifi.derivatives.MsgBurnLiquidityProviderToken', ununifi.derivatives.MsgBurnLiquidityProviderToken);
cosmosclient.codec.register('/ununifi.derivatives.MsgOpenPosition', ununifi.derivatives.MsgOpenPosition);
cosmosclient.codec.register('/ununifi.derivatives.MsgClosePosition', ununifi.derivatives.MsgClosePosition);
cosmosclient.codec.register('/ununifi.derivatives.MsgReportLiquidation', ununifi.derivatives.MsgReportLiquidation);