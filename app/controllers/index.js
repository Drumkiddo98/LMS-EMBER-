import Controller from '@ember/controller';
import { action } from '@ember/object'; 

export default class IndexController extends Controller {
     @action
     libLogin(){
         console.log(this.libmail,this.libpass);   
        if(this.libmail== 'admin' && this.libpass=='admin')  
            this.transitionToRoute("libhome");
        else
            alert("Incorrect Login");
        
        
     }
}
