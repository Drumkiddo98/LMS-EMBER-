import EmberRouter from '@ember/routing/router';
import config from 'lmsnew1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('libhome', function() {
    this.route('addbook');
    this.route('issuebook');
    this.route('listbooks');
    this.route('liststudents');
    this.route('addstudent');
  });
  this.route('studhome',function() {
    this.route('viewbooks',{path: '/book/:id'});
    this.route('returnbooks',{path: '/issuedbook/:id'});
    this.route('studindex',{path: '/student/:id'});
  });
});
