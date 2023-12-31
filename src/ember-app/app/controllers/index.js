import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.паркомат.caption'),
          title: i18n.t('forms.application.sitemap.паркомат.title'),
          children: [{
            link: 'i-i-s-prilozhenie-parkomata-парковка-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-парковка-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-парковка-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-parkomata-услуга-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-услуга-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-parkomata-шлагбаум-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-шлагбаум-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-шлагбаум-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-parkomata-водитель-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-водитель-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-parkomata-терминал-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-терминал-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-parkomata-автомобиль-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-автомобиль-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-автомобиль-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-parkomata-парк-место-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-парк-место-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-prilozhenie-parkomata-парк-место-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})