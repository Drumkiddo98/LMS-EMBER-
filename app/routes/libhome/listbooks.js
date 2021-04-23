import Route from '@ember/routing/route';

export default class LibhomeListbookRoute extends Route {
    model(){
        return this.store.findAll('book');
        
    }
}
