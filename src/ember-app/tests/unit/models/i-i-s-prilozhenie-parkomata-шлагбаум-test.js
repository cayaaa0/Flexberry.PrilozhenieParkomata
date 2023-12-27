import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-parkomata-шлагбаум', 'Unit | Model | i-i-s-prilozhenie-parkomata-шлагбаум', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
