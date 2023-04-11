import { ununifi } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as copyTrading from '../copy-trading/module';

cosmosclient.codec.register('/ununifi.copytrading.MsgCreateExemplaryTrader', ununifi.copytrading.MsgCreateExemplaryTrader);
cosmosclient.codec.register('/ununifi.copytrading.MsgUpdateExemplaryTrader', ununifi.copytrading.MsgUpdateExemplaryTrader);
cosmosclient.codec.register('/ununifi.copytrading.MsgDeleteExemplaryTrader', ununifi.copytrading.MsgDeleteExemplaryTrader);
cosmosclient.codec.register('/ununifi.copytrading.MsgCreateTracing', ununifi.copytrading.MsgCreateTracing);
cosmosclient.codec.register('/ununifi.copytrading.MsgDeleteTracing', ununifi.copytrading.MsgDeleteTracing);
