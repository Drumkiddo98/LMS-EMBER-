import Controller from '@ember/controller';

export default class StudhomeReturnbooksController extends Controller {
    model(books){
        books.destroyRecord();
        this.transitionToRoute('libhome.index'); 
    }
}
