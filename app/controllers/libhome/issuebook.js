import Controller from '@ember/controller';
import { action } from '@ember/object'; 


export default class LibhomeIssuebookController extends Controller {
     @action
    issuebook(){
        console.log(this.bookid,this.studid);
        let post= this.store.createRecord('issuebook',{
        bookid:this.bookid,
        studid:this.studid,
        });
        post.save();        
        this.transitionToRoute('libhome.index');     

    }
}
