import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_parkomataАвтомобильLForm from './forms/i-i-s-prilozhenie-parkomata-автомобиль-l';
import IISPrilozhenie_parkomataВодительLForm from './forms/i-i-s-prilozhenie-parkomata-водитель-l';
import IISPrilozhenie_parkomataПаркМестоLForm from './forms/i-i-s-prilozhenie-parkomata-парк-место-l';
import IISPrilozhenie_parkomataПарковкаLForm from './forms/i-i-s-prilozhenie-parkomata-парковка-l';
import IISPrilozhenie_parkomataТерминалLForm from './forms/i-i-s-prilozhenie-parkomata-терминал-l';
import IISPrilozhenie_parkomataУслугаLForm from './forms/i-i-s-prilozhenie-parkomata-услуга-l';
import IISPrilozhenie_parkomataШлагбаумLForm from './forms/i-i-s-prilozhenie-parkomata-шлагбаум-l';
import IISPrilozhenie_parkomataАвтомобильEForm from './forms/i-i-s-prilozhenie-parkomata-автомобиль-e';
import IISPrilozhenie_parkomataВодительEForm from './forms/i-i-s-prilozhenie-parkomata-водитель-e';
import IISPrilozhenie_parkomataПаркМестоEForm from './forms/i-i-s-prilozhenie-parkomata-парк-место-e';
import IISPrilozhenie_parkomataПарковкаEForm from './forms/i-i-s-prilozhenie-parkomata-парковка-e';
import IISPrilozhenie_parkomataТерминалEForm from './forms/i-i-s-prilozhenie-parkomata-терминал-e';
import IISPrilozhenie_parkomataУслугаEForm from './forms/i-i-s-prilozhenie-parkomata-услуга-e';
import IISPrilozhenie_parkomataШлагбаумEForm from './forms/i-i-s-prilozhenie-parkomata-шлагбаум-e';
import IISPrilozhenie_parkomataАвтомобильModel from './models/i-i-s-prilozhenie-parkomata-автомобиль';
import IISPrilozhenie_parkomataВодительModel from './models/i-i-s-prilozhenie-parkomata-водитель';
import IISPrilozhenie_parkomataЗапОбУслModel from './models/i-i-s-prilozhenie-parkomata-зап-об-усл';
import IISPrilozhenie_parkomataПаркМестоModel from './models/i-i-s-prilozhenie-parkomata-парк-место';
import IISPrilozhenie_parkomataПарковкаModel from './models/i-i-s-prilozhenie-parkomata-парковка';
import IISPrilozhenie_parkomataПаркоматModel from './models/i-i-s-prilozhenie-parkomata-паркомат';
import IISPrilozhenie_parkomataТерминалModel from './models/i-i-s-prilozhenie-parkomata-терминал';
import IISPrilozhenie_parkomataУслугаModel from './models/i-i-s-prilozhenie-parkomata-услуга';
import IISPrilozhenie_parkomataШлагбаумModel from './models/i-i-s-prilozhenie-parkomata-шлагбаум';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-parkomata-автомобиль': IISPrilozhenie_parkomataАвтомобильModel,
    'i-i-s-prilozhenie-parkomata-водитель': IISPrilozhenie_parkomataВодительModel,
    'i-i-s-prilozhenie-parkomata-зап-об-усл': IISPrilozhenie_parkomataЗапОбУслModel,
    'i-i-s-prilozhenie-parkomata-парк-место': IISPrilozhenie_parkomataПаркМестоModel,
    'i-i-s-prilozhenie-parkomata-парковка': IISPrilozhenie_parkomataПарковкаModel,
    'i-i-s-prilozhenie-parkomata-паркомат': IISPrilozhenie_parkomataПаркоматModel,
    'i-i-s-prilozhenie-parkomata-терминал': IISPrilozhenie_parkomataТерминалModel,
    'i-i-s-prilozhenie-parkomata-услуга': IISPrilozhenie_parkomataУслугаModel,
    'i-i-s-prilozhenie-parkomata-шлагбаум': IISPrilozhenie_parkomataШлагбаумModel
  },

  'application-name': 'Prilozhenie_parkomata',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_parkomata',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_parkomata',
          title: 'Prilozhenie_parkomata'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        паркомат: {
          caption: 'Паркомат',
          title: 'Паркомат',
          'i-i-s-prilozhenie-parkomata-парковка-l': {
            caption: 'Парковка',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-шлагбаум-l': {
            caption: 'Шлагбаум',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-водитель-l': {
            caption: 'Водитель',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-автомобиль-l': {
            caption: 'Автомобиль',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-парк-место-l': {
            caption: 'Парковочное место',
            title: ''
          }
        },
        'prilozhenie-parkomata': {
          caption: 'Prilozhenie_parkomata',
          title: 'Prilozhenie_parkomata',
          'i-i-s-prilozhenie-parkomata-парковка-l': {
            caption: 'Парковка',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-шлагбаум-l': {
            caption: 'Шлагбаум',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-водитель-l': {
            caption: 'Водитель',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-автомобиль-l': {
            caption: 'Автомобиль',
            title: ''
          },
          'i-i-s-prilozhenie-parkomata-парк-место-l': {
            caption: 'Парк место',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-parkomata-автомобиль-l': IISPrilozhenie_parkomataАвтомобильLForm,
    'i-i-s-prilozhenie-parkomata-водитель-l': IISPrilozhenie_parkomataВодительLForm,
    'i-i-s-prilozhenie-parkomata-парк-место-l': IISPrilozhenie_parkomataПаркМестоLForm,
    'i-i-s-prilozhenie-parkomata-парковка-l': IISPrilozhenie_parkomataПарковкаLForm,
    'i-i-s-prilozhenie-parkomata-терминал-l': IISPrilozhenie_parkomataТерминалLForm,
    'i-i-s-prilozhenie-parkomata-услуга-l': IISPrilozhenie_parkomataУслугаLForm,
    'i-i-s-prilozhenie-parkomata-шлагбаум-l': IISPrilozhenie_parkomataШлагбаумLForm,
    'i-i-s-prilozhenie-parkomata-автомобиль-e': IISPrilozhenie_parkomataАвтомобильEForm,
    'i-i-s-prilozhenie-parkomata-водитель-e': IISPrilozhenie_parkomataВодительEForm,
    'i-i-s-prilozhenie-parkomata-парк-место-e': IISPrilozhenie_parkomataПаркМестоEForm,
    'i-i-s-prilozhenie-parkomata-парковка-e': IISPrilozhenie_parkomataПарковкаEForm,
    'i-i-s-prilozhenie-parkomata-терминал-e': IISPrilozhenie_parkomataТерминалEForm,
    'i-i-s-prilozhenie-parkomata-услуга-e': IISPrilozhenie_parkomataУслугаEForm,
    'i-i-s-prilozhenie-parkomata-шлагбаум-e': IISPrilozhenie_parkomataШлагбаумEForm
  },

});

export default translations;
