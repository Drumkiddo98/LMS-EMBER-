import Route from '@ember/routing/route';

export default class LibhomeRoute extends Route {
    model(){
        this.store.unloadAll();
    }
}
