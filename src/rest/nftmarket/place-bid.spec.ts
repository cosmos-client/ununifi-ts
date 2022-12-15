import cosmosclient from '@cosmos-client/core';
import Long from 'long';
import ununificlient from '../..';

describe('bank', () => {
  it('send', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');

    const privKey = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toBe('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    // const toAddress = address;

    // get account info
    const account = await cosmosclient.rest.auth
      .account(sdk, fromAddress)
      .then((res) => cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(res.data.account)))
      .catch(() => undefined);

    const date = new Date();
    // build tx
    const msgPlaceBid = new ununificlient.proto.ununifi.nftmarket.MsgPlaceBid({
      sender: fromAddress.toString(),
      nft_id: { class_id: 'a01', nft_id: 'a10' },
      bid_amount: { denom: 'token', amount: '3' },
      bidding_period: ununificlient.proto.google.protobuf.Timestamp.fromObject({
        seconds: date.getTime() / 1000,
        nanos: (date.getTime() % 1000) * 1e6,
      }),
      deposit_lending_rate: '0.9',
      automatic_payment: true,
      deposit_amount: { denom: 'token', amount: '1' },
    });

    const msgAny = cosmosclient.codec.instanceToProtoAny(msgPlaceBid);
    // 受け渡しする2つのString
    const type = msgAny.type_url;
    const value = toHexString(msgAny.value);
    const valueBuf = fromHexString(value);
    console.log('type: ' + type);
    console.log('value: ' + value);
    // Anyの復元
    const msgAnyRev = new cosmosclient.proto.google.protobuf.Any({ type_url: type, value: valueBuf });
    const msgPlaceBidRev: any = cosmosclient.codec.protoAnyToInstance(msgAnyRev);
    console.log(msgPlaceBidRev);

    const txBody = new cosmosclient.proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.instanceToProtoAny(msgPlaceBidRev)],
    });

    // eslint-disable-next-line jest/no-conditional-in-test
    if (!(account instanceof cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    const authInfo = new cosmosclient.proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(pubKey),
          mode_info: {
            single: {
              mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: account.sequence,
        },
      ],
      fee: {
        gas_limit: Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(sdk, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    // broadcast
    const res = await cosmosclient.rest.tx.broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes(),
      mode: cosmosclient.rest.tx.BroadcastTxMode.Block,
    });
    console.log(res);

    expect(res.data.tx_response?.raw_log?.match('failed')).toBeFalsy();
  });
});

function toHexString(bytes: any) {
  return bytes.reduce((str: any, byte: any) => str + byte.toString(16).padStart(2, '0'), '');
}

function fromHexString(hexString: string) {
  const a = hexString.match(/.{1,2}/g);
  if (!a) {
    return;
  }
  return Uint8Array.from(a.map((byte) => parseInt(byte, 16)));
}
