import Route from '@ember/routing/route';

export default class LibhomeListstudentsRoute extends Route {
      model(){
        return this.store.findAll('student');
        
    }
}
