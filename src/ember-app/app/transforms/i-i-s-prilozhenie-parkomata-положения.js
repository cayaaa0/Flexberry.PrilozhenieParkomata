import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПоложенияEnum from '../enums/i-i-s-prilozhenie-parkomata-положения';

export default FlexberryEnum.extend({
  enum: ПоложенияEnum,
  sourceType: 'IIS.Prilozhenie_parkomata.Положения'
});
