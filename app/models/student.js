import Model, { attr } from '@ember-data/model';

export default class StudentModel extends Model {
     @attr('string') studid;
     @attr('string') studname;
     @attr('string') studmail;
     @attr('string') studpass;


}
