import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-parkomata-автомобиль-l');
  this.route('i-i-s-prilozhenie-parkomata-автомобиль-e',
  { path: 'i-i-s-prilozhenie-parkomata-автомобиль-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-автомобиль-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-автомобиль-e/new' });
  this.route('i-i-s-prilozhenie-parkomata-водитель-l');
  this.route('i-i-s-prilozhenie-parkomata-водитель-e',
  { path: 'i-i-s-prilozhenie-parkomata-водитель-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-водитель-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-водитель-e/new' });
  this.route('i-i-s-prilozhenie-parkomata-парк-место-l');
  this.route('i-i-s-prilozhenie-parkomata-парк-место-e',
  { path: 'i-i-s-prilozhenie-parkomata-парк-место-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-парк-место-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-парк-место-e/new' });
  this.route('i-i-s-prilozhenie-parkomata-парковка-l');
  this.route('i-i-s-prilozhenie-parkomata-парковка-e',
  { path: 'i-i-s-prilozhenie-parkomata-парковка-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-парковка-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-парковка-e/new' });
  this.route('i-i-s-prilozhenie-parkomata-терминал-l');
  this.route('i-i-s-prilozhenie-parkomata-терминал-e',
  { path: 'i-i-s-prilozhenie-parkomata-терминал-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-терминал-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-терминал-e/new' });
  this.route('i-i-s-prilozhenie-parkomata-услуга-l');
  this.route('i-i-s-prilozhenie-parkomata-услуга-e',
  { path: 'i-i-s-prilozhenie-parkomata-услуга-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-услуга-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-услуга-e/new' });
  this.route('i-i-s-prilozhenie-parkomata-шлагбаум-l');
  this.route('i-i-s-prilozhenie-parkomata-шлагбаум-e',
  { path: 'i-i-s-prilozhenie-parkomata-шлагбаум-e/:id' });
  this.route('i-i-s-prilozhenie-parkomata-шлагбаум-e.new',
  { path: 'i-i-s-prilozhenie-parkomata-шлагбаум-e/new' });
});

export default Router;
