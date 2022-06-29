import * as ununificlient from '.';
import Long from 'long';

(window as any).Long = Long;
(window as any).ununificlient = ununificlient;
(window as any).ununifi = ununificlient.default.ununifi;
