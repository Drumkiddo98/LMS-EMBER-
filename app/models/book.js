import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
     @attr('string') bookid;
     @attr('string') bookname;
     @attr('string') bookauthor;
     @attr('string') bookprice;

}
