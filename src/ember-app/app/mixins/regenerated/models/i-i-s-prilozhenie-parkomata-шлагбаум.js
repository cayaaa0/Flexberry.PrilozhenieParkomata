import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номШлаг: DS.attr('number'),
  положение: DS.attr('i-i-s-prilozhenie-parkomata-положения')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-шлагбаум.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номШлаг: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-шлагбаум.validations.номШлаг.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  положение: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-шлагбаум.validations.положение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ШлагбаумE', 'i-i-s-prilozhenie-parkomata-шлагбаум', {
    адрес: attr('Адрес', { index: 0 }),
    положение: attr('Положение', { index: 1 }),
    номШлаг: attr('Номер шлагбаума', { index: 2 })
  });

  modelClass.defineProjection('ШлагбаумL', 'i-i-s-prilozhenie-parkomata-шлагбаум', {
    адрес: attr('Адрес', { index: 0 }),
    положение: attr('Положение', { index: 1 }),
    номШлаг: attr('Номер шлагбаума', { index: 2 })
  });
};
