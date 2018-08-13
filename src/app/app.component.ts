import { Component ,OnInit} from '@angular/core';
import { AppService} from './app.service';
import { FormsModule} from '@angular/forms';
import { DataStruct } from './DataStruct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uname:string;
  age:number;

  datalist:DataStruct;
  constructor(private user:AppService){}

  ngOnInit(){
    this.printdata();
  }

  printdata(){
    this.user.getData().subscribe(data => this.datalist=data);
    console.log(this.datalist);
  }

  invokePost(){
    this.user.postData(this.uname,this.age).subscribe((data:any)=>{
        
    })
  }


}
