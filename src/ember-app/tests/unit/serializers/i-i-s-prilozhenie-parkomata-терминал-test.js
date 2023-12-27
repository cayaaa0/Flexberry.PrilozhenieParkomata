import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-parkomata-терминал', 'Unit | Serializer | i-i-s-prilozhenie-parkomata-терминал', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-parkomata-терминал',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-parkomata-оплата',
    'transform:i-i-s-prilozhenie-parkomata-положения',
    'transform:i-i-s-prilozhenie-parkomata-статусы',
    'transform:i-i-s-prilozhenie-parkomata-стоимость',
    'transform:i-i-s-prilozhenie-parkomata-услуги',

    'model:i-i-s-prilozhenie-parkomata-автомобиль',
    'model:i-i-s-prilozhenie-parkomata-водитель',
    'model:i-i-s-prilozhenie-parkomata-зап-об-усл',
    'model:i-i-s-prilozhenie-parkomata-парк-место',
    'model:i-i-s-prilozhenie-parkomata-парковка',
    'model:i-i-s-prilozhenie-parkomata-паркомат',
    'model:i-i-s-prilozhenie-parkomata-терминал',
    'model:i-i-s-prilozhenie-parkomata-услуга',
    'model:i-i-s-prilozhenie-parkomata-шлагбаум',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
