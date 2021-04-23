import Controller from '@ember/controller';
import { action } from '@ember/object'; 

export default class LibhomeAddbookController extends Controller {
    @action 
    addbook(){
        console.log(this.bookid,this.bookname,this.bookauthor,this.bookprice);
        let post= this.store.createRecord('book',{
        id:this.bookid,
        bookname:this.bookname,
        bookauthor:this.bookauthor,
        bookprice:this.bookprice
        });
        post.save();        
        this.transitionToRoute('libhome.index');        
    }
}
