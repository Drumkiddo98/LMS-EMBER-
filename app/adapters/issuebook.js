import RESTAPIAdapter from '@ember-data/adapter/rest';

export default class IssuebookAdapter extends RESTAPIAdapter {
    host='http://localhost:8080/lmsnew1/webapi/librarian';
}
