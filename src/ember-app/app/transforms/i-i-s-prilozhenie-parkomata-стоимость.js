import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтоимостьEnum from '../enums/i-i-s-prilozhenie-parkomata-стоимость';

export default FlexberryEnum.extend({
  enum: СтоимостьEnum,
  sourceType: 'IIS.Prilozhenie_parkomata.Стоимость'
});
