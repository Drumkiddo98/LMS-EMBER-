import Controller from '@ember/controller';
import { action } from '@ember/object'; 

export default class LibhomeAddstudentController extends Controller {
    @action
    addstudent(){
        console.log(this.studid,this.studname,this.studmail,this.studpass);
        let post= this.store.createRecord('student',{
        id:this.studid,
        studname:this.studname,
        studmail:this.studmail,
        studpass:this.studpass
        });
        post.save();        
        this.transitionToRoute('libhome.index');     

    }
}
