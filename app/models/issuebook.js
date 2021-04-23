import Model, { attr } from '@ember-data/model';

export default class IssuebookModel extends Model {
    @attr('string') bookid;
    @attr('string') studid;
}
