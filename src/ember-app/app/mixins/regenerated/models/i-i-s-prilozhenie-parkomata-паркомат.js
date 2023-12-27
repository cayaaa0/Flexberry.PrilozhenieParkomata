import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номерПарк: DS.attr('number'),
  терминал: DS.belongsTo('i-i-s-prilozhenie-parkomata-терминал', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-prilozhenie-parkomata-услуга', { inverse: null, async: false }),
  шлагбаум: DS.belongsTo('i-i-s-prilozhenie-parkomata-шлагбаум', { inverse: null, async: false }),
  парковка: DS.belongsTo('i-i-s-prilozhenie-parkomata-парковка', { inverse: 'паркомат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-паркомат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПарк: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-паркомат.validations.номерПарк.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-паркомат.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-паркомат.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  шлагбаум: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-паркомат.validations.шлагбаум.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  парковка: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-паркомат.validations.парковка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаркоматE', 'i-i-s-prilozhenie-parkomata-паркомат', {
    адрес: attr('Адрес', { index: 0 }),
    номерПарк: attr('Номер парк', { index: 1 }),
    шлагбаум: belongsTo('i-i-s-prilozhenie-parkomata-шлагбаум', 'Шлагбаум', {
      адрес: attr('Адрес', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'адрес' }),
    терминал: belongsTo('i-i-s-prilozhenie-parkomata-терминал', 'Терминал', {
      адрес: attr('Адрес', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'адрес' }),
    услуга: belongsTo('i-i-s-prilozhenie-parkomata-услуга', 'Услуга', {
      длительность: attr('Длительность', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'длительность' })
  });
};
