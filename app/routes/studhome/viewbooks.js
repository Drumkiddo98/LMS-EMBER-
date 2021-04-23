import Route from '@ember/routing/route';

export default class StudhomeViewbooksRoute extends Route {
    model(params){
        // console.log(params);
        return this.store.findRecord('book', params.id);
    }
}
