import cosmosclient from '@cosmos-client/core';
import ununificlient from '.';
import Long from 'long';

(window as any).ununificlient = ununificlient;

if ((window as any).cosmosclient) {
  (window as any).cosmosclient.config.codecMaps.constructor = {
    ...(window as any).cosmosclient.config.codecMaps.constructor,
    ...cosmosclient.config.codecMaps.constructor,
  };

  for (const [key, value] of cosmosclient.config.codecMaps.convertJSON.entries()) {
    (window as any).cosmosclient.config.codecMaps.convertJSON.set(key, value);
  }

  for (const [key, value] of cosmosclient.config.codecMaps.inv.entries()) {
    (window as any).cosmosclient.config.codecMaps.inv.set(key, value);
  }
} else {
  (window as any).Long = Long;
  (window as any).cosmosclient = cosmosclient;
}
