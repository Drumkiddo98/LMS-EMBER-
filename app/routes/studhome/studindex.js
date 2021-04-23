import Route from '@ember/routing/route';

export default class StudhomeStudindexRoute extends Route {
    model(params){
         return this.store.findRecord('student', params.id);
    }
}
