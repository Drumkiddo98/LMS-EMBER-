import RESTAPIAdapter from '@ember-data/adapter/rest';

export default class BookAdapter extends RESTAPIAdapter {
    host='http://localhost:8080/lmsnew1/webapi/librarian';
}
