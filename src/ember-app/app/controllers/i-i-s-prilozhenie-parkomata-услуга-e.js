import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-parkomata-услуга-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-parkomata-зап-об-усл+паркМесто':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'адрес',
            required: true,
            relationName: 'паркМесто',
            projection: 'ПаркМестоL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-parkomata-зап-об-усл+автомобиль':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'госНомер',
            required: true,
            relationName: 'автомобиль',
            projection: 'АвтомобильL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
