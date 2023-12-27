import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номПарковки: DS.attr('number'),
  паркомат: DS.hasMany('i-i-s-prilozhenie-parkomata-паркомат', { inverse: 'парковка', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-парковка.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номПарковки: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-парковка.validations.номПарковки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-парковка.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПарковкаE', 'i-i-s-prilozhenie-parkomata-парковка', {
    номПарковки: attr('Ном парковки', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    паркомат: hasMany('i-i-s-prilozhenie-parkomata-паркомат', 'Паркомат', {
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
    })
  });

  modelClass.defineProjection('ПарковкаL', 'i-i-s-prilozhenie-parkomata-парковка', {
    номПарковки: attr('Ном парковки', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
