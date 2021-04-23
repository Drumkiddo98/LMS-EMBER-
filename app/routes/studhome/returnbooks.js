import Route from '@ember/routing/route';

export default class StudhomeReturnbooksRoute extends Route {
     model(params){
        // console.log(params);
        return this.store.findRecord('book', params.id);
    }
}
