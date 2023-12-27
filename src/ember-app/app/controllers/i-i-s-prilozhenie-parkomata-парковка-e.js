import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-parkomata-парковка-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-parkomata-паркомат+шлагбаум':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'адрес',
            required: true,
            relationName: 'шлагбаум',
            projection: 'ШлагбаумL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-parkomata-паркомат+терминал':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'адрес',
            required: true,
            relationName: 'терминал',
            projection: 'ТерминалL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-parkomata-паркомат+услуга':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'длительность',
            required: true,
            relationName: 'услуга',
            projection: 'УслугаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
