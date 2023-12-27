import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('string'),
  наименование: DS.attr('i-i-s-prilozhenie-parkomata-услуги'),
  номерУсл: DS.attr('number'),
  стоимость: DS.attr('i-i-s-prilozhenie-parkomata-стоимость'),
  запОбУсл: DS.hasMany('i-i-s-prilozhenie-parkomata-зап-об-усл', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерУсл: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-услуга.validations.номерУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-услуга.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  запОбУсл: {
    descriptionKey: 'models.i-i-s-prilozhenie-parkomata-услуга.validations.запОбУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-prilozhenie-parkomata-услуга', {
    номерУсл: attr('Номер усл', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    запОбУсл: hasMany('i-i-s-prilozhenie-parkomata-зап-об-усл', 'Зап об усл', {
      времяНачала: attr('Время начала', { index: 0 }),
      датаНачала: attr('Дата начала', { index: 1 }),
      времяОкон: attr('Время окон', { index: 2 }),
      датаОкон: attr('Дата окон', { index: 3 }),
      статОпл: attr('Стат опл', { index: 4 }),
      времяОплаты: attr('Время оплаты', { index: 5 }),
      паркМесто: belongsTo('i-i-s-prilozhenie-parkomata-парк-место', 'Парк место', {
        адрес: attr('Адрес', { index: 7, hidden: true })
      }, { index: 6, displayMemberPath: 'адрес' }),
      автомобиль: belongsTo('i-i-s-prilozhenie-parkomata-автомобиль', 'Автомобиль', {
        госНомер: attr('Гос номер', { index: 9, hidden: true })
      }, { index: 8, displayMemberPath: 'госНомер' })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-prilozhenie-parkomata-услуга', {
    номерУсл: attr('Номер усл', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });
};
